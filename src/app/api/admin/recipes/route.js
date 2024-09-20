// export async function GET() {
//     return new Response('hello RECIPES')
// }

import GetData from "@/utils/fetchData";
// import { data } from "../posts/route";

const giveData =[]
const  recipes  = await GetData("https://dummyjson.com/recipes");  
// {recipe}
giveData.push(recipes)
export function GET() {
  return Response.json(recipes);
}
// async function POST(req) {
//   const body = await req.json()
//   giveData.push({...body,id:uuid()});
//   return Response.json(giveData);
// }

export async function POST(req) {
  const body = await req.json();
  console.log(body);
  giveData.push({ ...body });
  console.log(giveData);
  return Response.json(body);
}
// export async function POST(req) {
//   const body = await req.json();
//   const newPost = { ...body, id: body.id }
//  data.push(newPost);
//   return Response.json(newPost);
//    }