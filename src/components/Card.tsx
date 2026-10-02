import type { TodoItem } from "../types";

interface CardProps {
  todo?: TodoItem;
}

/**
 * TODO 카드와 완료 카드가 함께 쓰는 단일 카드 컴포넌트.
 * 내용(텍스트)과 레이아웃은 동일하고, "버튼 라벨/동작"과 "완료 스타일 여부"만
 * 호출부(TodoList/CompletedList)가 props로 다르게 주입한다.
 */
export function Card({ todo }: CardProps) {
  return (
    <div>
      <span>{todo?.text}</span>
      <button>완료</button>
      <button>삭제</button>
    </div>
  );
}
