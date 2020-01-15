import React from "react";

const TodoForm = props => {
  let todoClassName = "item";
  if (props.item.purchased) {
    todoClassName = todoClassName + " purchased";
  }

  const handleClick = () => {
    props.togglePurchased(props.item.id);
  };

  return (
    <div onClick={handleClick} className={todoClassName}>
      <p>{props.item.name}</p>
    </div>
  );
};

export default TodoForm;