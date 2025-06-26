import React from "react";
import useGetTodos from "./_hooks/useGetTodos";

function Page() {
  const { todos } = useGetTodos();
  return (
    <ul>
      {todos?.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

export default Page;
