import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <div className="p-4">
      <form className="todo-form" onSubmit={handleSubmit}>
        <div className="flex justify-between">
          <div className="w-3/4 mr-4">
            <input
              type="text"
              placeholder="Add a todo"
              value={input}
              name="text"
              className="w-full p-4 border-2 border-gray-200 todo-input"
              onChange={handleChange}
              ref={inputRef}
            />
          </div>
          <div className="w-1/4">
            <button className="w-full p-4 text-white bg-orange-300 border-2 border-orange-300 rounded-md todo-button hover:bg-transparent">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TodoForm;
