import type { TodoItem } from "../types";

interface CardProps {
  todo?: TodoItem;
  handleComplete?: (id: string) => void;
  handleDelete?: (id: string) => void;
}

/**
 * 할 일 한 개를 표시하고, 버튼을 누르면 부모가 전달한 함수에 해당 ID를 넘긴다.
 * 삭제 버튼은 TODO에서는 완전 삭제, 완료 목록에서는 TODO 복귀로 동작한다.
 */
export function Card({ todo, handleComplete, handleDelete }: CardProps) {
  return (
    <div className="card">
      <span className="card-text">{todo?.text}</span>
      <div className="card-actions">
        {/* 완료 상태가 아니면 완료 버튼을 표시한다. 화살표 함수는 클릭할 때 실행된다. */}
        {!todo?.completed && <button onClick={() => todo && handleComplete?.(todo.id)}>완료</button>}
        {/* todo &&는 데이터가 있을 때만 진행하고, handleDelete?.()는 함수가 있을 때만 호출한다. */}
        <button className="delete-button" onClick={() => todo && handleDelete?.(todo.id)}>삭제</button>
      </div>
    </div>
  );
}
