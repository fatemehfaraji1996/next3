import Link from "next/link";
import React from "react";

export default function Nav() {
  const pages = [{ title: "users",rout:'/users' }, { title: "posts",rout:'/posts' }, { title: "recipes",rout:'/recipes' }];
  return (
    <div className='flex gap-14 bg-green-300 p-8'>
       {pages.map((item, i) => {
        return(

<Link className='' href={item.rout}>{item.title}</Link>

        ) 
      })} 
      
    </div>
  );
}
