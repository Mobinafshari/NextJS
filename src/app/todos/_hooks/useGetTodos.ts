import { useQuery } from "@tanstack/react-query";
type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
const useGetTodos = () => {
  const { data: todos } = useQuery({
    queryFn: (): Promise<TodoType[]> =>
      fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
        res.json()
      ),
    queryKey: ["todos"],
  });
  return { todos };
};

export default useGetTodos;
