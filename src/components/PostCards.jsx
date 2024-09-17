import React from "react";
import GetData from "@/utils/fetchData";
import Link from "next/link";
import CreatPost from "./CreatPost";

// import CreatePost from "./CreatePost";

export default async function PostCards() {
  const posts = await GetData("http://localhost:3000/api/admin/posts", {
    next: { tags: ["recatch"] },
  });

  return (
    <>
      <CreatPost></CreatPost>
      {posts.map((x) => (
        <div className="flex w-2/3 bg-lime-200 p-10">
          <Link key={x.id} href={`/posts/${x.id}`}>
            <div className="border-8 p-5">
              <p className="p-5">{x.title}</p>
              <br />
              <p>{x.body}</p>
            </div>
          </Link>
          <button className="bg-red-600 w-28 p-4 m-10 h-20">Delet Post</button>
        </div>
      ))}
    </>
  );
}
