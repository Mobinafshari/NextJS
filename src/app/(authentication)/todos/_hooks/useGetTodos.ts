import { useQuery } from "@tanstack/react-query";

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const useGetTodos = () => {
  const { data: todos } = useQuery({
    queryKey: ["todos"],
    queryFn: async (): Promise<TodoType[]> => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      return res.json();
    },
  });

  return { todos };
};

export default useGetTodos;
