// export async function GET() {
//     return new Response('hello POSTS')
// }

import GetData from "@/utils/fetchData";

export async function GET() {
  const data = await GetData("https://dummyjson.com/posts");
  const user = data.posts;
  return Response.json(data);
}
