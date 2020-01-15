import React from 'react';
import ReactDOM from "react-dom";
import App from "./App"

const data = [
    {
      name: "Workout",
      id: 123,
      purchased: false
    },
    {
      name: "Class",
      id: 124,
      purchased: false
    },
    {
      name: "Make Lunch",
      id: 1235,
      purchased: false
    },
    {
      name: "Study",
      id: 1246,
      purchased: false
    },
    {
      name: "Homework",
      id: 1237,
      purchased: false
    },
    {
      name: "Make Dinner",
      id: 1248,
      purchased: false
    }
  ];
export default data;




const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
