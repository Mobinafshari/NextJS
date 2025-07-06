"use client";
import { PostType } from "../page";
type Props = {
  posts: PostType[];
};
function PostPreview({ posts }: Props) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default PostPreview;
