import React, { Suspense } from "react";
import Comments from "./_components/Comments";
import Loading from "../../loading";

function page() {
  return (
    <div className="flex flex-col gap-4">
      <h2>This is Comment Page</h2>
      <Suspense fallback={<Loading />}>
        <Comments />
      </Suspense>
    </div>
  );
}

export default page;
