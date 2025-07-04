import Loading from "@/app/loading";
import { cookies } from "next/headers";

type CommentType = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
export default async function Comments() {
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;
  if (!userId) return <Loading />;
  const res = await fetch("https://jsonplaceholder.typicode.com/comments", {
    cache: "no-store",
    headers: {
      userId,
    },
  });

  await new Promise((r) => setTimeout(r, 3000));

  const data = await res.json();

  return (
    <ul>
      {data.slice(0, 10).map((comment: CommentType) => (
        <li key={comment.id}>{comment.email}</li>
      ))}
    </ul>
  );
}
