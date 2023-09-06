import React from "react";
function App() {
  return (
    <div className="App">
      <h1>Welcome, Tyler</h1>
      <h4>Your Tasks</h4>
      <div className="todos">
        <div className="todo">
          <div className="Checkbox"></div>
          <div className="text">Get the bread</div>
          <div className="delete-todo"></div>
        </div>
        <div className="todo is-complete">
          <div className="Checkbox"></div>
          <div className="text">Get the milk</div>
          <div className="delete-todo"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
