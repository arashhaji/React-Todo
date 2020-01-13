import React from "react";

import Item from "./TodoForm";

const Todo = props => {
    return (
        <div className="Todo-list">
          {props.groceries.map(item => (
            <Item
              key={item.id}
              item={item}
              togglePurchased={props.togglePurchased}
            />
          ))}
          <button className="clear-btn" onClick={props.clearPurchased}>
            Completed
          </button>
        </div>
      );
    };

    export default Todo;
