import React from "react";
import { useState, useEffect } from 'react';

const API_BASE= "http://localhost:3001";

function App() {

  const [todo, setTodos] = useState([]);
  const [popupActive, setPopupActive] = useState(false);
  const[newTodo, setNewTodo] = useState("");

useEffect(()=>{
  GetTodos();
}, [])

const GetTodos = ()=> {
  fetch(API_BASE + "/todos")
      .then(res => res.json())
      .then(data => setTodos(data))
      .catch(err => console.error("Error:", err));
}

  return (
    <div className="App">
      <h1>Welcome, Tyler</h1>
      <h4>Your Tasks</h4>
      <div className="todos">
        {todos.map(todo =>(
          <div className="todo">
          <div className="Checkbox"></div>
          <div className="text">{todo.text}</div>
          <div className="delete-todo"></div>
        </div>
        ))}
        
      </div>
    </div>
  );
}

export default App;
