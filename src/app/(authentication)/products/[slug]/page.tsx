import { PostType } from "../page";

async function page({ params }: { params: Promise<{ userId: string }> }) {
  const { userId } = await params;
  const post: PostType = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${userId}`,
    {
      cache: "force-cache",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());
  return (
    <div className="w-full h-full grid place-content-center ">{post.body}</div>
  );
}

export default page;
