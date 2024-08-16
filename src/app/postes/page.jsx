
import PostCards from "@/components/PostCards";
import React from "react";

export const metadata = {
  title: 'bether posts',
  description: 'post',
}

export default async function postes() {
  // const respanse = await GetData("https://dummyjson.com/posts");
  // const post = respanse.posts;
  // console.log(respanse.id);
 
  // return (
  //   <>
  //     <div>posts</div>
  //     {post.map((x) => {
  //       return(
  //         <Link href={`/postes/${x.id}`}>
  //       <div className='flex w-2/3 bg-lime-200 p-10'  >
  //         <div className='border-8 p-5' >
  //         <p>{x.title}</p>
  //         <br />
  //         <p>{x.body}</p>
  //         <p>{x.id}</p>
  //         </div>
  //       </div>
  //         </Link>
  //       ) 
  //     })}
  //   </>
  // );

  return <PostCards></PostCards>
}
