import React, { use } from "react";

type CommentType = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

function Comments() {
  const comments = use(
    fetch("https://jsonplaceholder.typicode.com/comments").then(async (res) => {
      await new Promise((r) => setTimeout(r, 3000));
      return res.json();
    })
  );

  return (
    <ul>
      {comments.map((comment: CommentType) => (
        <li key={comment.id}>{comment.email}</li>
      ))}
    </ul>
  );
}

export default Comments;
