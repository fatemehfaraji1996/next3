// export async function GET() {
//     return new Response('hello USERS')
// }

import GetData from "@/utils/fetchData";

export async function GET() {
  const data = await GetData("https://dummyjson.com/users");
  const user = data.users;
  return Response.json(user);
}
