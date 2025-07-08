"use client";

import { useEffect, useRef } from "react";
import { PostType } from "../page";
import { useRouter } from "nextjs-toploader/app";

type Props = {
  posts: PostType[];
};

function PostPreview({ posts }: Props) {
  const lastPostRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    if (!lastPostRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          console.log("📌 Last post is visible, maybe load more posts...");
        }
      },
      {
        root: lastPostRef.current,
        threshold: 1.0,
        rootMargin: "0px",
      }
    );

    observer.observe(lastPostRef.current);

    return () => {
      if (lastPostRef.current) {
        observer.unobserve(lastPostRef.current);
      }
    };
  }, [posts]);
  const router = useRouter();
  return (
    <ul id="list" className="space-y-4 ">
      {posts.map((post, i) => {
        const isLast = i === posts.length - 1;
        return (
          <li
            onClick={() => router.push(`${post.userId}`)}
            key={post.id}
            ref={isLast ? lastPostRef : null}
            className="p-4 border rounded bg-white overflow-y-auto max-h-50dvh"
          >
            {post.title}
          </li>
        );
      })}
    </ul>
  );
}

export default PostPreview;
