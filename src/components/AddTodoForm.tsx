import { useState } from "react";


/** 할 일 텍스트를 입력받아 "Add Todo"를 누르면 onAdd(text)를 호출하고 입력창을 비운다. */
export function AddTodoForm() {
  const [text, setText] = useState("");

  return (
    <form className="add-todo-form">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}
