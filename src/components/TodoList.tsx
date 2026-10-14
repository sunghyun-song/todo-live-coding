import { Card } from "./Card";
import { AddTodoForm } from "./AddTodoForm";
import type { TodoItem } from "../types";

interface TodoListProps {
  todos: TodoItem[];
  setTodoList: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}

/** 상단 TODO 영역: 입력 폼 + 아직 완료되지 않은 카드 목록 */
export function TodoList({ todos, setTodoList }: TodoListProps) {

  // 기존 항목 뒤에 미완료 상태의 새 할 일을 추가한다.
  const handleAddTodo = (text: string) => {
    // prevTodos는 React가 전달하는 업데이트 직전 상태다.
    // ...prevTodos로 기존 항목을 펼쳐 새 배열을 만들므로 원본 배열은 바꾸지 않는다.
    setTodoList((prevTodos) => [
      ...prevTodos,
      // 현재 시각을 밀리초 단위 문자열로 바꿔 ID로 사용한다.
      { id: Date.now().toString(), text, completed: false }
    ])
  }

  // 선택한 항목의 완료 상태를 true로 바꿔 완료 영역에 표시되게 한다.
  const handleComplete = (id: string) => {
    // map은 각 항목을 순회해 새 배열을 만든다.
    // ID가 같으면 객체를 복사해 completed만 바꾸고, 나머지 항목은 그대로 반환한다.
    setTodoList((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    )
  }

  // TODO 영역에서 선택한 항목을 완전히 삭제한다.
  const handleDelete = (id: string) => {
    // 최신 상태에서 ID가 다른 항목만 filter로 남긴 새 배열을 다음 상태로 저장한다.
    // 예: [A, B, C]에서 B의 ID를 전달하면 [A, C]가 된다.
    setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  return (
    <section className="board-section" data-testid="todo-list">
      <div className="section-header">
        <div><p className="section-label">LET’S DO THIS</p><h2><span className="status-dot" aria-hidden="true" />해야 할 일</h2></div>
        <span className="section-tag">TO DO</span>
      </div>
      <AddTodoForm onAddTodo={handleAddTodo} />
      <div className="card-list">
        {/* 미완료 항목이 없으면 안내를 표시하고, 있으면 filter로 골라 map으로 카드를 만든다. */}
        {todos.filter((todo) => !todo.completed).length === 0 && <p className="empty">할 일이 없습니다.</p>}
        {todos.filter((todo) => !todo.completed).map((todo) => (
          <Card key={todo.id} todo={todo} handleComplete={handleComplete} handleDelete={handleDelete} />
        ))}
      </div>
    </section>
  );
}
