import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Todo Board (통합 테스트)", () => {
  it("Add Todo로 새 카드를 추가하면 TODO 영역에 나타난다", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(screen.getByPlaceholderText("할 일을 입력하세요"), "새로운 작업");
    await user.click(screen.getByRole("button", { name: "Add Todo" }));

    const todoSection = screen.getByTestId("todo-list");
    expect(within(todoSection).getByText("새로운 작업")).toBeInTheDocument();
  });

  it("완료 버튼을 누르면 카드가 TODO 영역에서 사라지고 완료 영역에 나타난다", async () => {
    const user = userEvent.setup();
    render(<App />);

    const todoSection = screen.getByTestId("todo-list");
    const completedSection = screen.getByTestId("completed-list");

    expect(within(todoSection).getByText("요구사항 정리하기")).toBeInTheDocument();

    await user.click(within(todoSection).getAllByRole("button", { name: "완료" })[0]);

    expect(within(todoSection).queryByText("요구사항 정리하기")).not.toBeInTheDocument();
    expect(within(completedSection).getByText("요구사항 정리하기")).toBeInTheDocument();
  });

  it("완료 영역에서 삭제 버튼을 누르면 카드가 완전히 사라진다", async () => {
    const user = userEvent.setup();
    render(<App />);

    const todoSection = screen.getByTestId("todo-list");
    const completedSection = screen.getByTestId("completed-list");

    await user.click(within(todoSection).getAllByRole("button", { name: "완료" })[0]);
    await user.click(within(completedSection).getByRole("button", { name: "삭제" }));

    expect(screen.queryByText("요구사항 정리하기")).not.toBeInTheDocument();
  });

  it("Reset 버튼을 누르면 추가/완료 작업이 전부 초기 상태로 되돌아간다", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(screen.getByPlaceholderText("할 일을 입력하세요"), "임시 작업");
    await user.click(screen.getByRole("button", { name: "Add Todo" }));
    await user.click(screen.getByRole("button", { name: "Reset" }));

    const todoSection = screen.getByTestId("todo-list");
    const completedSection = screen.getByTestId("completed-list");

    expect(screen.queryByText("임시 작업")).not.toBeInTheDocument();
    expect(within(todoSection).getByText("요구사항 정리하기")).toBeInTheDocument();
    expect(within(todoSection).getByText("컴포넌트 구조 설계하기")).toBeInTheDocument();
    expect(within(completedSection).queryByRole("button", { name: "삭제" })).not.toBeInTheDocument();
  });
});
