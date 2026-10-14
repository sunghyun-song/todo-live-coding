import { TodoList } from "./components/TodoList";
import { CompletedList } from "./components/CompletedList";
import "./App.css";
import type { TodoItem } from "./types";
import { useState } from "react";

/** 전체 할 일 상태를 보관하고, 두 목록이 같은 상태를 공유하도록 전달한다. */
function App() {

  const todos: TodoItem[] = [
    {
      id: "1",
      text: "할 일 1",
      completed: false
    },
    {
      id: "2",
      text: "할 일 2",
      completed: false
    },
  ]
  // todos를 초기값으로 사용한다. setTodoList로 상태를 바꾸면 두 목록이 다시 렌더링된다.
  const [todoList, setTodoList] = useState(todos)
  return (
    <div className="app">
      <header className="app-header">
        <div className="brand"><span className="brand-mark" aria-hidden="true">✓</span> little by little<span className="brand-caption">MY DAILY SPACE</span></div>
        <div className="header-copy">
          <p className="eyebrow">MAKE ROOM FOR WHAT MATTERS</p>
          <h1>오늘의 작은 한 걸음<span>.</span></h1>
          <p className="header-description">하나씩 가볍게 정리하고, 나만의 속도로 채워가는 하루.</p>
        </div>
      </header>
      <main className="board">
        <TodoList todos={todoList} setTodoList={setTodoList} />
        <CompletedList todos={todoList} setTodoList={setTodoList} />
      </main>
      <footer className="app-footer"><span aria-hidden="true">✳</span> 작은 완료가 모여, 좋은 하루가 됩니다.</footer>
    </div>
  );
}

export default App;
