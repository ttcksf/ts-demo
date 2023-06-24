import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState<string | null>("");

  const addTodo = () => {
    // setTodo("test");
    // nullが来る可能性がある
    setTodo(null);
  };
  return (
    <div>
      <p>{todo}</p>
    </div>
  );
};

export default Todo;
