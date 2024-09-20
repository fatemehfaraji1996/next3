import GetData from "@/utils/fetchData";
import { data } from "../../posts/route";

export async function GET(req, { params }) {
  const data = await GetData("https://dummyjson.com/recipes");
  const recipe = data.recipes;
  const response = recipe.find((x) => x.id == params.recipeid);
  if (!response) {
    return Response.json("erore");
  }
  return Response.json(response);
}
// POST 
// export async function POST(req) {
//   const body = await req.json();
//   console.log(body);
//   const newPost = { ...body, id: body.id }
//  data.push(newPost);
//   return Response.json(newPost);
//    }
