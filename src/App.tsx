import { useTodoBoard } from "./hooks/useTodoBoard";
import { TodoList } from "./components/TodoList";
import { CompletedList } from "./components/CompletedList";
import "./App.css";

function App() {
  const { todos, completed, addTodo, completeTodo, removeCompleted, reset } = useTodoBoard();

  return (
    <div className="app">
      <header className="app-header">
        <h1>Todo Board</h1>
        <button onClick={reset}>Reset</button>
      </header>
      <main className="board">
        <TodoList todos={todos} onAdd={addTodo} onComplete={completeTodo} />
        <CompletedList completed={completed} onRemove={removeCompleted} />
      </main>
    </div>
  );
}

export default App;
