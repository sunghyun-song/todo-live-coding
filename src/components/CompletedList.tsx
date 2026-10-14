import type { TodoItem } from "../types";
import { Card } from "./Card";

interface CompletedListProps {
  todos: TodoItem[];
  setTodoList: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}

/** 완료된 항목을 표시한다. "삭제"는 개별 항목을, Reset은 완료 항목 전체를 TODO로 돌려보낸다. */
export function CompletedList({ todos, setTodoList }: CompletedListProps) {

  // 모든 항목의 완료 상태를 해제한다. 항목을 삭제하거나 초기 데이터로 되돌리지는 않는다.
  const handleReset = () => {
    // map으로 새 배열을 만들고, 각 객체의 ID와 내용은 복사하면서 completed만 false로 덮어쓴다.
    setTodoList((prevTodos) =>
      prevTodos.map((todo) => ({ ...todo, completed: false }))
    );
  };

  // 완료 목록의 "삭제": 해당 항목의 완료 상태만 해제해 TODO로 돌려보낸다.
  const handleDelete = (id: string) => {
    // ID가 일치하는 항목만 복사해 수정하고, 나머지 항목은 그대로 유지한다.
    setTodoList((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: false } : todo
      )
    )
  }

  return (
    <section className="board-section" data-testid="completed-list">
      <div className="section-header">
        <div><p className="section-label">NICELY DONE</p><h2><span className="status-dot" aria-hidden="true" />완료된 일감</h2></div>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div className="card-list">
        {/* 완료 항목만 골라 빈 목록인지 확인하고, 같은 조건으로 골라낸 항목을 카드로 표시한다. */}
        {todos.filter((todo) => todo.completed).length === 0 && <div className="empty"><span className="empty-icon" aria-hidden="true">✓</span><p>아직 완료된 일감이 없어요</p><span>작은 일 하나부터, 천천히 시작해 보세요.</span></div>}
        {todos.filter((todo) => todo.completed).map((todo) => (
          <Card key={todo.id} todo={todo} handleDelete={handleDelete} />
        ))}
      </div>
    </section>
  );
}
