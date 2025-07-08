import { PostType } from "../page";

type Props = {
  params: Promise<{ id: string }>;
};
export async function generateMetadata({ params }: Props) {
  const id = (await params).id;
  const post: PostType = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      cache: "force-cache",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());
  return {
    title: post.title,
    description: post.body,
  };
}

async function page({ params }: Props) {
  const { id } = await params;
  const post: PostType = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      cache: "force-cache",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());
  console.log("first", post);
  return (
    <>
      <h1>Hello from {id}</h1>
      <div className="w-full h-full grid place-content-center ">
        <p className="max-w-1/2 text-center">{post.body}</p>
      </div>
    </>
  );
}

export default page;
