import GetData from "@/utils/fetchData";

export async function GET(req, { params }) {
  const data = await GetData("https://dummyjson.com/posts");
  const recipe = data.posts;
  const response = recipe.find((x) => x.id == params.postid);

  if (!response) {
    return Response.json("erore");
  }

  return Response.json(response);
}
     