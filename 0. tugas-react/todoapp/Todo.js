import React, { useState } from "react";
import './Todo.css'

function Todos({item, index, completeTodo, deleteTodo }) {
    return (
        <>
        <div className="todo" style={{textDecoration: item.isCompleted ? "line-throught": ""}}>
            {item.text}
        </div>
        <button onClick={() => completeTodo(index)} >Completed</button>
        <button onClick={() => deleteTodo(index)} >Delete</button>

        </>
    )
}

function Todo() {
  const [todo, setTodo] = useState([
    { text: "Belajar Menggambar", isCompleted: false },
    { text: "Makan", isCompleted: false },
    { text: "minum", isCompleted: false },
  ]);

  const addTodo = text => {
      const newTodo = [...todo, {text}];
      setTodo(newTodo);
  }

const completeTodo = (index) => {
    const newTodo = [...todo];
    newTodo[index].isCompleted = true;
    setTodo(newTodo);
    console.log(newTodo)

    
}
const deleteTodo = (index) => {
    const newtodo = [...todo]
    newtodo.splice(index, 1);
    setTodo(newtodo)
}

  return (
    <div className="App">
       <div className="todo-list">
         {/* untuk mapping */}
      {todo.map((item, index) => (
            <Todos key={index} index={index} item={item}
             completeTodo ={completeTodo} deleteTodo={deleteTodo} />
      ))}

        {/* untuk inpput text */}
      <TodoForm addTodo={addTodo} />  
        </div>  
    </div>
  );
}
export default Todo;

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

