// export async function GET() {
//     return new Response('hello RECIPES')
// }

import GetData from "@/utils/fetchData";



export async function GET() {
  const data = await GetData("https://dummyjson.com/recipes");
  const user = data.users;
  return Response.json(data);
}