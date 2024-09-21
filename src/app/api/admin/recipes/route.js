import GetData from "@/utils/fetchData";

const { recipes } = await GetData("https://dummyjson.com/recipes");

export const data = recipes;

export function GET() {
  return Response.json(data);
}
export async function POST(req) {
  const body = await req.json();
  // console.log(body);
  
  // const recipePost = { ...body }
  const ingredients = { ...body }
  // const name = { ...body }


 data.push(ingredients);
  // return Response.json(recipePost);
  return Response.json(ingredients);
   }
