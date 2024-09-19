import GetData from "@/utils/fetchData";
import { data } from "../route";
export async function GET(req, { params }) {

  // const data = await GetData(`http://localhost:3000/api/admin/posts`);
  // const recipe = data.posts;
  // const response = recipe.find((x) => x.id == params.postid);
  // if (!response) {
  //   return Response.json("erore");
  // }
  // return Response.json(response);

  const post = data.find((x) => x.id === parseInt(params.postid));
  // if (!response) {
  //   return Response.json("erore");
  // }
  return Response.json(post);
}