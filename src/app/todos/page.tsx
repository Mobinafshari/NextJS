"use client";
import React from "react";

import useGetTodos from "./_hooks/useGetTodos";

function Page() {
  const { todos } = useGetTodos();
  return (
    <div>
      <h1 className="mb-10">See Todos below!</h1>
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Page;
