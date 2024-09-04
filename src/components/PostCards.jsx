import React from 'react'
import GetData from "@/utils/fetchData";
import Link from "next/link";
import CreatPost from './CreatPost';
export default async function PostCards() {
    const respanse = await GetData("http://localhost:3000/api/admin/posts");
    const post = respanse.posts;
    console.log(post);
   
    return (
      <>

       <CreatPost></CreatPost>
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
