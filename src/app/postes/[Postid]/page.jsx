// import GetById from "@/utils/GetById";
import PostCartId from "@/components/UserCards";
import React from "react";
import GetById from "@/utils/GetById";
import { notFound } from "next/navigation";
export default async function page({ params }) {
  const resss = await GetById(
    `http://localhost:3000/api/admin/posts/${params.postid}`
  );
console.log(resss);

  if(!resss.views){
  notFound()
  // console.log('pp');
  }
  return (
    <>
      <div className="flex w-2/3 bg-lime-200 p-10">
        <div className="border-8 p-5">
          <p>{resss.title}</p>
          <br />
          <p>{resss.body}</p>
          <div className="bg-slate-500 flex">
            <p className="bg-gray-300"> #{resss.tags}</p>
          </div>
          <p>views: {resss.views}</p>
          <p>UserID: {resss.userId}</p>
        </div>
      </div>
    </>
  );
}
