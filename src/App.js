import Header from './MyComponents/Header.js';
import { Footer } from './MyComponents/Footer.js';
import { Todos } from './MyComponents/Todos.js';
import { AddTodo } from './MyComponents/AddTodo.js';
import React, { useState, useEffect } from 'react';
function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log(" I Am onDelete of todo", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const addTodo = (title, desc) => {
    console.log("I am Adding This Todo Title", title, desc)
    let sno;
    if (todos.length == 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

  }
  const [todos, setTodos] = useState([initTodo]);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  //   {
  //     sno: 1,
  //     title: "Go To The Mall",
  //     desc: "You Need to go to the market to get this job done"
  //   },
  //   {
  //     sno: 2,
  //     title: "Go To The Theator",
  //     desc: "You Need to go to the market to get this job done"
  //   },
  //   {
  //     sno: 3,
  //     title: "Go To The Market",
  //     desc: "You Need to go to the market to get this job done"
  //   }
  // ]);
  return (
    <>
      <Header title="My Todos List" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
      {/* </> */}
    </>
  );
}

export default App;
