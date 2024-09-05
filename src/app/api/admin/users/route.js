// export async function GET() {
//     return new Response('hello USERS')
// }

import GetData from "@/utils/fetchData";

// import GetData from "../../../../utils/fetchData";



const {users} = await GetData("https://dummyjson.com/users");
export  function GET() {
  return Response.json(users);
}

// const { posts } = await GetData("https://dummyjson.com/users");
// export const data = posts;
// export function GET() {
//   return Response.json(data);
// }