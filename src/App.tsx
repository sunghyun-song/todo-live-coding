import { TodoList } from "./components/TodoList";
import { CompletedList } from "./components/CompletedList";
import "./App.css";
import type { TodoItem } from "./types";

function App() {

  const todos: TodoItem[] = [
    {
      id: "1",
      text: "할 일 1",
    },
    {
      id: "2",
      text: "할 일 2",
    },
  ]

  return (
    <div className="app">
      <header className="app-header">
        <h1>Todo Board</h1>
      </header>
      <main className="board">
        <TodoList todos={todos} />
        <CompletedList todos={[]} />
      </main>
    </div>
  );
}

export default App;
