// import GetById from "@/utils/GetById";
import PostCartId from "@/components/UserCards";
import React from "react";
import GetById from "@/utils/GetById";
export default async function page({params}) {
  const resss = await GetById(`https://dummyjson.com/posts/${params.Postid}
    `);

  return (
    <>
      <div className="flex w-2/3 bg-lime-200 p-10">
        <div className="border-8 p-5">
          <p>{resss.title}</p>
          <br />
          <p>{resss.body}</p>
          <div className="bg-green-400 flex p-9">
            <p className="bg-gray-300"> #{resss.tags}</p>
          </div>
          <p>views: {resss.views}</p>
          <p>Liks: {resss.reactions.likes}</p>
          <p>UserID: {resss.userId}</p>
        </div>
      </div>
    </>
  );

}
