import { useState, type FormEvent } from "react";

interface AddTodoFormProps {
  onAddTodo: (text: string) => void;
}

/** 입력값을 관리하고, 폼을 제출하면 onAddTodo로 새 할 일 내용을 전달한다. */
export function AddTodoForm({ onAddTodo }: AddTodoFormProps) {
  const [text, setText] = useState("");

  // 버튼 클릭 또는 Enter로 제출하면 빈 입력을 걸러낸 뒤 할 일을 추가한다.
  const handleSubmit = (e: FormEvent) => {
    // 폼 제출 시 브라우저가 페이지를 새로고침하는 기본 동작을 막는다.
    e.preventDefault();
    // 앞뒤 공백을 제거하고, 공백만 입력했다면 추가하지 않는다.
    const trimmed = text.trim();
    if (!trimmed) return;
    // 부모의 추가 함수를 실행한 뒤 입력 상태를 비워 입력창도 초기화한다.
    onAddTodo(trimmed);
    setText("");
  };

  return (
    <form className="add-todo-form" onSubmit={handleSubmit} >
      <input
        value={text}
        // 입력할 때마다 현재 입력값을 상태에 반영한다.
        onChange={(e) => setText(e.target.value)}
        placeholder="할 일을 입력하세요"
        aria-label="새로운 할 일"
      />
      <button type="submit"><span aria-hidden="true">＋</span> 추가하기</button>
    </form>
  );
}
