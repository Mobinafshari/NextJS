import Link from "next/link";
import { connection } from "next/server";
import React from "react";
import PostPreview from "./_components/PostPreview";
export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function page() {
  await connection();
  const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  });
  const posts: PostType[] = await data.json();
  return (
    <div className="flex flex-col gap-4">
      <Link href="/comments" className="h-dvh mb-10">
        Go To Comments Page
      </Link>
      <PostPreview posts={posts} />
    </div>
  );
}

export default page;
