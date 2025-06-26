import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="h-full  flex flex-col gap-4 items-center justify-center">
      <Link href="/products">Wanna see the Products?</Link>
      <Link href="/comments">Wanna see the comments?</Link>
    </div>
  );
}

export default page;
