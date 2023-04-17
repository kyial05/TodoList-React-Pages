import "../../App.css";
import React, { useState, useEffect } from "react";
import add from "../../img/add.png";
import { TodoItem } from "../../components/TodoItem";
import { Context } from "../../context";

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const createTodo = () => {
    setTodos([...todos, { text: inputValue, complete: true }]);
    setInputValue("");
    localStorage.setItem(
      "todos",
      JSON.stringify([...todos, { text: inputValue, complete: true }])
    );
  };

  useEffect(() => {
    let localTodos = JSON.parse(localStorage.getItem("todos"));
    localTodos && setTodos(localTodos);
  }, []);

  const update = (arr) => {
    localStorage.setItem("todos", JSON.stringify(arr));
  };

  const completeTodo = (id) => {
    let arr = [...todos];
    arr[id].complete = !arr[id].complete;
    setTodos(arr);
    update(arr);
  };

  const deleteTodo = (id) => {
    console.log(id);
    let arr = [...todos];
    arr.splice(id, 1);
    setTodos(arr);
    update(arr);
  };


  return (
    <Context.Provider value={{ completeTodo, deleteTodo }}>
      <div className="App">
        <div className="container">
          <svg viewBox="0 0 960 300">
            <symbol id="s-text">
              <text textAnchor="middle" x="50%" y="80%">
                Do it!
              </text>
            </symbol>

            <g className="g-ants">
              <use href="#s-text" className="text-copy"></use>
              <use href="#s-text" className="text-copy"></use>
              <use href="#s-text" className="text-copy"></use>
              <use href="#s-text" className="text-copy"></use>
              <use href="#s-text" className="text-copy"></use>
            </g>
          </svg>
        </div>
        <div className="wrapper wr">
          <input
            className="text_place"
            type="text"
            placeholder="type smth..."
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <button onClick={createTodo}>
            <img src={add} alt="add" className="btn_ADD" />
          </button>
        </div>
        {todos &&
          todos.map((el, id) => {
            // null check
            return (
              <TodoItem
                todo={el}
                key={id}
                id={id}
                deleteTodo={deleteTodo}
                completeTodo={completeTodo}
              />
            );
          })}
      </div>
    </Context.Provider>
  );
};