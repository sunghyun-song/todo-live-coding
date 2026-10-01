import type { TodoItem } from "../types";
import { TodoCard } from "./TodoCard";
import { AddTodoForm } from "./AddTodoForm";

interface TodoListProps {
  todos: TodoItem[];
  onAdd: (text: string) => void;
  onComplete: (id: string) => void;
}

/** 상단 TODO 영역: 입력 폼 + 아직 완료되지 않은 카드 목록 */
export function TodoList({ todos, onAdd, onComplete }: TodoListProps) {
  return (
    <section className="board-section" data-testid="todo-list">
      <h2>TODO</h2>
      <AddTodoForm onAdd={onAdd} />
      <div className="card-list">
        {todos.length === 0 && <p className="empty">할 일이 없습니다.</p>}
        {todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} onComplete={onComplete} />
        ))}
      </div>
    </section>
  );
}
