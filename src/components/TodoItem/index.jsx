import React from "react";
import { useContext } from "react";
import { Context } from "../../context";
import "./TodoItem.css";
import done from "../../img/done.png";
import del from "../../img/delete.png";
import back from "../../img/back.png";

export const TodoItem = ({ todo, id }) => {
  const { deleteTodo, completeTodo } = useContext(Context);
  return (
    <div className="todo-item">
      <div style={todo.complete ? notReady : ready} className="task">
        {/* {tasks.task} */}
        {todo.text}
      </div>
      <div>
        <button onClick={() => completeTodo(id)}>
          {todo.complete ? (
            <img src={done} alt="done" className="doneIcon" />
          ) : (
            <img src={back} alt="back" className="backIcon" />
          )}
        </button>
        <button onClick={() => deleteTodo(id)}>
          <img src={del} alt="done" className="delIcon" />
        </button>
      </div>
    </div>
  );
};

const ready = {
  textDecoration: "line-through",
  color: "grey",
};

const notReady = {
  textDecoration: "none",
};

