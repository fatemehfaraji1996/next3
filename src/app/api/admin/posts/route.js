// export async function GET() {
//     return new Response('hello POSTS')
// }

import GetData from "../../../../utils/fetchData";


const { posts } = await GetData("https://dummyjson.com/posts");
export const data = posts;
export function GET() {
  return Response.json(data);
}
// export async function POST(req) {
//   const body = await req.json();
//   const add= {body,...posts}
//   return Response.json(add);
// }


export async function POST(req) {
  const body = await req.json();
  const add= {...posts,body}
  return Response.json(add);
}
