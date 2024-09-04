import React from "react";
import GetData from "@/utils/fetchData";
import Link from "next/link";
import CreatPost from "./CreatPost";
export default async function PostCards() {
  const posts = await GetData("http://localhost:3000/api/admin/posts");
 console.log(posts);
 
  return (
    <>
      {/* <CreatPost></CreatPost>
      {posts.map((x) => {
        return (
          <Link href={`/postes/${x.id}`}>
            <div key={x.id} className="flex w-2/3 bg-lime-200 p-10">
              <div className="border-8 p-5">
                <p className="p-5">{x.title}vvjvyvygvkgb</p>
                <br />
                <p>{x.body}</p>
                <p>{x.id}</p>
              </div>
            </div>
          </Link>
        );
      })} */}
    </>
  );
}
