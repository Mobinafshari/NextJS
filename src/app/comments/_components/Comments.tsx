import React, { use } from "react";
type CommentType = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
type Props = {
  comments: Promise<CommentType[]>;
};
function Comments({ comments }: Props) {
  const allComments = use(comments);
  return (
    <ul>
      {allComments.map((comment) => (
        <li key={comment.id}>{comment.email}</li>
      ))}
    </ul>
  );
}

export default Comments;
