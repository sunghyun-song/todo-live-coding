import { Card } from "./Card";

/** 하단 완료 일감 영역: 완료 처리된 카드 목록. 각 카드에서 "삭제"로 완전히 제거 가능 */
export function CompletedList({ todos }) {
  return (
    <section className="board-section" data-testid="completed-list">
      <div className="section-header">
        <h2>완료된 일감</h2>
        <button>Reset</button>
      </div>
      <div className="card-list">
        {todos.length === 0 && <p className="empty">완료된 일감이 없습니다.</p>}
        {todos.map((todo) => (
          <Card key={todo.id} todo={todo} />
        ))}
      </div>
    </section>
  );
}
