import React from 'react'
import GetData from "@/utils/fetchData";
import Link from "next/link";
export default async function PostCards() {
    const respanse = await GetData("https://dummyjson.com/posts");
    const post = respanse.posts;
    console.log(respanse.id);
   
    return (
      <>

        <div className='m-5'>
        <button className='bg-lime-400 p-4 '>Add Post</button>
        <input className='bg-lime-200 p-4' type="text" />
        </div>
        {post.map((x) => {
          return(
            <Link href={`/postes/${x.id}`}>
          <div className='flex w-2/3 bg-lime-200 p-10'  >
            <div className='border-8 p-5' >
            <p>{x.title}</p>
            <br />
            <p>{x.body}</p>
            <p>{x.id}</p>
            </div>
          </div>
            </Link>
          ) 
        })}
      </>
    );
}
