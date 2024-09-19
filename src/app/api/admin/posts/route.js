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
//   data.push({ ...body });

//   return Response.json(body);
// }
export async function POST(req) {
 const body = await req.json();
 const newPost = { ...body, id: body.id }
data.push(newPost);
  
 return Response.json(newPost);
  }