import type { TodoItem } from "../types";

interface CardProps {
  todo: TodoItem;
  /** 버튼에 표시할 라벨. TODO 영역에서는 "완료", 완료 영역에서는 "삭제"처럼 호출부가 결정한다. */
  actionLabel: string;
  /** 버튼 클릭 시 호출된다. todo.id가 인자로 전달된다. */
  onAction: (id: string) => void;
  /** true면 완료된 카드 스타일(취소선 등)로 표시한다. */
  completed?: boolean;
}

/**
 * TODO 카드와 완료 카드가 함께 쓰는 단일 카드 컴포넌트.
 * 내용(텍스트)과 레이아웃은 동일하고, "버튼 라벨/동작"과 "완료 스타일 여부"만
 * 호출부(TodoList/CompletedList)가 props로 다르게 주입한다.
 */
export function Card({ todo, actionLabel, onAction, completed = false }: CardProps) {
  return (
    <div className={`card${completed ? " completed" : ""}`} data-testid={`card-${todo.id}`}>
      <span>{todo.text}</span>
      <button onClick={() => onAction(todo.id)}>{actionLabel}</button>
    </div>
  );
}
