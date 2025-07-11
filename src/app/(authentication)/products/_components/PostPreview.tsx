"use client";

import { useEffect, useRef, useState } from "react";
import { PostType } from "../page";
import { useRouter } from "nextjs-toploader/app";
import clsx from "clsx";

type Props = {
  posts: PostType[];
};

const VISIBLE_ITEMS = 10;

function PostPreview({ posts }: Props) {
  const lastPostRef = useRef<HTMLLIElement | null>(null);
  const [visibleCount, setVisibleCount] = useState(VISIBLE_ITEMS);

  useEffect(() => {
    const element = lastPostRef.current;
    if (!element || visibleCount >= posts.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setVisibleCount((prev) => prev + VISIBLE_ITEMS);
          console.log("📌 Last post is visible, maybe load more posts...");
        }
      },
      {
        root: null,
        threshold: 1.0,
        rootMargin: "0px",
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [visibleCount, posts.length]);
  const router = useRouter();
  return (
    <ul id="list" className="h-[400px] overflow-y-auto space-y-4 ">
      {posts.slice(0, visibleCount).map((post, i) => {
        const isLast = i === visibleCount - 1;
        return (
          <li
            onClick={() => router.push(`products/${post.id}`)}
            key={`${post.id}`}
            ref={isLast ? lastPostRef : null}
            className={clsx(
              "p-4 border rounded bg-white overflow-y-auto max-h-50dvh cursor-pointer"
            )}
          >
            {post.title} {i}
          </li>
        );
      })}
    </ul>
  );
}

export default PostPreview;
