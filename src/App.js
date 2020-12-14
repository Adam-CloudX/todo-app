import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <main className="flexbox">
        <TodoList />
      </main>
    </div>
  );
}

export default App;
