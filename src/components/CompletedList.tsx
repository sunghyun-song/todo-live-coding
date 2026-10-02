import type { TodoItem } from "../types";
import { Card } from "./Card";

interface CompletedListProps {
  completed: TodoItem[];
  onRemove: (id: string) => void;
}

/** 하단 완료 일감 영역: 완료 처리된 카드 목록. 각 카드에서 "삭제"로 완전히 제거 가능 */
export function CompletedList({ completed, onRemove }: CompletedListProps) {
  return (
    <section className="board-section" data-testid="completed-list">
      <h2>완료된 일감</h2>
      <div className="card-list">
        {completed.length === 0 && <p className="empty">완료된 일감이 없습니다.</p>}
        {completed.map((todo) => (
          <Card key={todo.id} todo={todo} actionLabel="삭제" onAction={onRemove} completed />
        ))}
      </div>
    </section>
  );
}
