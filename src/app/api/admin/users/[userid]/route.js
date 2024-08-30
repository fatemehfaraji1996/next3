// import GetData from "@/utils/fetchbyid";

import GetData from "@/utils/fetchData";

export async function GET(req, { params }) {
  const data = await GetData("https://dummyjson.com/users");
  const user = data.users;
  const response = user.find((x) => x.id == params.userid);

  if (!response) {
    return Response.json("erore");
  }

  return Response.json(response);
}
