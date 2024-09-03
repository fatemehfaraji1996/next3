// export async function GET() {
//     return new Response('hello POSTS')
// }

import GetData from "@/utils/fetchData";
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
  return Response.json(giveData);
}

export async function POST(req) {
  const body = await req.json();
  // arr.push(body);
  // return Response.json(arr);

  giveData.push(body);
  return Response.json(giveData);
}
