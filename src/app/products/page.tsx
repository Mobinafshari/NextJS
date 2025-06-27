import Link from "next/link";
import React from "react";
type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function page() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  });
  const posts: PostType[] = await data.json();
  return (
    <ul>
      <Link href="/comments">Go To Comments Page</Link>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default page;
