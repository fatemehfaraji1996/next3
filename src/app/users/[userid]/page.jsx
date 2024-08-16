// import notFound from "@/app/not-found";
import GetById from "@/utils/GetById";
import { notFound } from "next/navigation";

import React from "react";

export default async function page({ params }) {
  const pp = await GetById(`https://dummyjson.com/users/${params.userid}`);
  
if(!pp.username){
notFound()
}
  return (
    <>
      
      <div className="pt-5">
        <div className="w-2/3 h-auto bg-lime-200 flex flex-col text-amber-900 p-10 ">
          {/* <div>page:{params.userid}</div> */}
          <p>username:{pp.username}</p>
          <p>age:{pp.age}</p>
          <p> email:{pp.email}</p>
          <p>gender: {pp.gender}</p>
        </div>
      </div>
    </>
  );
}
