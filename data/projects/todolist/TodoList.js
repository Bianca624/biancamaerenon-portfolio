import React, { useState } from "react";
import Navbar from "../../Navbar";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  // update todo

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  //   removetodo
  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        <div className="flex flex-col justify-center items center lg:max-w-7xl lg:mx-auto ">
          <div className="mt-20 ">
            <div className="p-4 text-lg font-bold text-center ">
              Todo List Sample Website
            </div>
          </div>

          <div className="">
            <h1 className="mt-5 font-bold text-center text-black">
              Whats the Plan Today?
            </h1>
            <div>
              <TodoForm onSubmit={addTodo} />
            </div>
            <div className="mt-4 lg:max-w-4xl lg:mx-auto">
              <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
