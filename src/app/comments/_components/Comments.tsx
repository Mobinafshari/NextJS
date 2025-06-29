type CommentType = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
export default async function Comments() {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments", {
    next: { revalidate: 0 },
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
