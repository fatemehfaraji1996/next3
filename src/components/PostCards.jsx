import React from "react";
import GetData from "@/utils/fetchData";
import Link from "next/link";
import CreatPost from "./CreatPost";
import DeletPost from "./DeletPost";
// import CreatePost from "./CreatePost";
export default async function PostCards() {
  const posts = await GetData("http://localhost:3000/api/admin/posts", {
    next: { tags: ["recatch"] },
  });
  return (
    <>
      <CreatPost/>
      {posts.map((x) => (
        <div className="flex w-2/3 bg-lime-200 p-10">
          <Link key={x.id} href={`/postes/${x.id}`}>
            <div className="border-8 p-5">
              <p className="p-5">{x.title}</p>
              <br />
              <p>{x.body}</p>
              <p>{x.id}</p>
            </div>
          </Link>
          <DeletPost id={x.id} />
        </div>
      ))}
    </>
  );
}
