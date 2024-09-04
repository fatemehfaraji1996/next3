// export async function GET() {
//     return new Response('hello POSTS')
// }

import GetData from "@/utils/fetchData";
import {v4 as uuid}from "uuid"
// import { Hind_Guntur, Yeseva_One } from "next/font/google";
const arr = [
  {
    0: "a",
    1: "b",
    2: "c",
  },
];
const giveData=[]
export async function GET() {
  const data = await GetData("https://dummyjson.com/posts");
  const user = data.posts;
  giveData.push(data)
  return Response.json(user);
  // return Response.json(data);
}

export async function POST(req) {
  const body = await req.json();
  // arr.push(body);
  // return Response.json(arr);

  giveData.push({...body,id:uuid()});
  return Response.json(giveData);
}
