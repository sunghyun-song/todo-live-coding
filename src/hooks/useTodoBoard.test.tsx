import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useTodoBoard } from "./useTodoBoard";

describe("useTodoBoard", () => {
  it("초기 상태는 시드 todo 2개, 완료 목록은 비어있다", () => {
    const { result } = renderHook(() => useTodoBoard());

    expect(result.current.todos).toHaveLength(2);
    expect(result.current.completed).toEqual([]);
  });

  it("addTodo로 새 todo를 추가하면 todos에 반영된다", () => {
    const { result } = renderHook(() => useTodoBoard());

    act(() => {
      result.current.addTodo("새로운 할 일");
    });

    expect(result.current.todos).toHaveLength(3);
    expect(result.current.todos.some((t) => t.text === "새로운 할 일")).toBe(true);
  });

  it("completeTodo를 호출하면 todos에서 사라지고 completed로 옮겨간다", () => {
    const { result } = renderHook(() => useTodoBoard());
    const target = result.current.todos[0];

    act(() => {
      result.current.completeTodo(target.id);
    });

    expect(result.current.todos.find((t) => t.id === target.id)).toBeUndefined();
    expect(result.current.completed.find((t) => t.id === target.id)).toEqual(target);
  });

  it("removeCompleted를 호출하면 completed에서 완전히 제거된다 (todos로 돌아가지 않음)", () => {
    const { result } = renderHook(() => useTodoBoard());
    const target = result.current.todos[0];

    act(() => {
      result.current.completeTodo(target.id);
    });
    act(() => {
      result.current.removeCompleted(target.id);
    });

    expect(result.current.completed.find((t) => t.id === target.id)).toBeUndefined();
    expect(result.current.todos.find((t) => t.id === target.id)).toBeUndefined();
  });

  it("reset을 호출하면 초기 상태(시드 2개, completed 빈 배열)로 돌아간다", () => {
    const { result } = renderHook(() => useTodoBoard());
    const firstId = result.current.todos[0].id;

    act(() => {
      result.current.addTodo("임시 할 일");
    });
    act(() => {
      result.current.completeTodo(firstId);
    });
    act(() => {
      result.current.reset();
    });

    expect(result.current.todos).toHaveLength(2);
    expect(result.current.todos.map((t) => t.text)).toEqual([
      "요구사항 정리하기",
      "컴포넌트 구조 설계하기",
    ]);
    expect(result.current.completed).toEqual([]);
  });
});
