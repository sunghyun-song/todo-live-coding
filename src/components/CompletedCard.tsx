import type { TodoItem } from "../types";

interface CompletedCardProps {
  todo: TodoItem;
  onRemove: (id: string) => void;
}

/** 완료된 일감 리스트에 보이는 카드 한 장. "삭제" 누르면 부모에게 id를 알려준다. */
export function CompletedCard({ todo, onRemove }: CompletedCardProps) {
  return (
    <div className="card completed" data-testid={`completed-card-${todo.id}`}>
      <span>{todo.text}</span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  );
}
