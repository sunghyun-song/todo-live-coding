import type { TodoItem } from "../types";

/**
 * useTodoBoard
 *
 * Todo 보드(TODO 리스트 + 완료된 일감 리스트) 전체의 상태와 핵심 동작을 담당하는 훅.
 *
 * 초기 상태(반드시 이 시드 데이터로 시작해야 테스트가 통과합니다):
 *   todos: [
 *     { id: "1", text: "요구사항 정리하기" },
 *     { id: "2", text: "컴포넌트 구조 설계하기" },
 *   ]
 *   completed: []
 *
 * 구현해야 할 동작:
 * - addTodo(text): 새 TodoItem을 만들어 todos에 추가한다. (id는 자유롭게 생성 — 유일하기만 하면 됨)
 * - completeTodo(id): todos에서 해당 id를 찾아 "제거"하고, completed 맨 앞(또는 뒤)에 "추가"한다.
 *   (같은 항목이 todos와 completed 양쪽에 동시에 있으면 안 됨)
 * - removeCompleted(id): completed에서 해당 id를 완전히 제거한다. (todos로 돌아가지 않음)
 * - reset(): todos/completed를 전부 위의 "초기 상태"로 되돌린다.
 *
 * TODO: 아래 훅을 구현하세요. (테스트: useTodoBoard.test.tsx, App.test.tsx)
 * 힌트: useState로 todos/completed 두 배열을 따로 관리해도 되고,
 *       하나의 배열에 상태 필드(status: "todo" | "done")를 두고 필터링해도 됩니다.
 */
export interface UseTodoBoardResult {
  todos: TodoItem[];
  completed: TodoItem[];
  addTodo: (text: string) => void;
  completeTodo: (id: string) => void;
  removeCompleted: (id: string) => void;
  reset: () => void;
}

// 아직 구현 전 기본값(npm run dev에서 화면이 보이도록 하는 용도).
// 실제로는 useState로 바꾸고, 아래 4개 함수도 진짜 동작하게 구현해야 합니다.
const INITIAL_TODOS: TodoItem[] = [
  { id: "1", text: "요구사항 정리하기" },
  { id: "2", text: "컴포넌트 구조 설계하기" },
];

export function useTodoBoard(): UseTodoBoardResult {
  // TODO: 아래 return을 지우고, useState 기반의 진짜 구현으로 바꾸세요.
  return {
    todos: INITIAL_TODOS,
    completed: [],
    addTodo: () => {},
    completeTodo: () => {},
    removeCompleted: () => {},
    reset: () => {},
  };
}
