import React, { useState } from "react";
import classes from "./TodoItem.module.css";

const TodoItem = ({ title, id, deleteTodo, updateTodo }) => {
  //jsx css use tae pone san
  //   const style = {
  //     backgroundColor: "pink",
  //     listStyle: "none",
  //     color: "#fff",
  //     margin: "1rem",
  //     padding: "1rem",
  //     borderRadius: "1rem",
  //     fontSize: "18px",
  //   };
  //   return <li style={style}>{props.title}</li>;
  const [editTitle, setEditTitle] = useState(title);
  const [show, setShow] = useState(false);

  let element = title;

  const handleUpdate = () => {
    setShow(false);
    updateTodo({ id, title: editTitle });
  };

  if (show) {
    element = (
      <>
        <input
          type="text"
          name="editTitle"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
        <button onClick={handleUpdate}>Update</button>
      </>
    );
  }

  return (
    <li className={classes.todoitem}>
      <span>{element}</span>
      <button onClick={(e) => deleteTodo(id)} className={classes.crossX}>
        x
      </button>
      <button style={{ float: "right" }} onClick={(e) => setShow(!show)}>
        Edit
      </button>
    </li>
  );
};

export default TodoItem;
