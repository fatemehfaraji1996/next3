// export async function GET() {
//     return new Response('hello RECIPES')
// }

import GetData from "@/utils/fetchData";


const giveData =[]
export async function GET() {
  const data = await GetData("https://dummyjson.com/recipes");
  const user = data.users;
  giveData.push(data)
  // return Response.json(giveData);
  return Response.json(data);
}
// async function POST(req) {
//   const body = await req.json()
//   giveData.push({...body,id:uuid()});
//   return Response.json(giveData);
// }