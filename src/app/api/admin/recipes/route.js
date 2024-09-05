// export async function GET() {
//     return new Response('hello RECIPES')
// }

import GetData from "@/utils/fetchData";

// const giveData =[]
const { recipes } = await GetData("https://dummyjson.com/recipes");
export function GET() {
  return Response.json(recipes);
}
// async function POST(req) {
//   const body = await req.json()
//   giveData.push({...body,id:uuid()});
//   return Response.json(giveData);
// }
