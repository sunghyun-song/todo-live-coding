import type { TodoItem } from "../types";

interface TodoCardProps {
  todo: TodoItem;
  onComplete: (id: string) => void;
}

/** TODO 리스트에 보이는 카드 한 장. "완료" 누르면 부모에게 id를 알려준다. */
export function TodoCard({ todo, onComplete }: TodoCardProps) {
  return (
    <div className="card" data-testid={`todo-card-${todo.id}`}>
      <span>{todo.text}</span>
      <button onClick={() => onComplete(todo.id)}>완료</button>
    </div>
  );
}
