import React, { Suspense } from "react";
import Comments from "./_components/Comments";

function page() {
  const comments = fetch("https://jsonplaceholder.typicode.com/comments").then(
    (res) => res.json()
  );
  return (
    <div className="flex flex-col gap-4">
      <h2>This is Comment Page</h2>
      <Suspense fallback={<p>Loading...</p>}>
        <Comments comments={comments} />
      </Suspense>
    </div>
  );
}

export default page;
