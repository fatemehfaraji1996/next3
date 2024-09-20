import GetData from "@/utils/fetchData";

export async function GET(req, { params }) {
  const data = await GetData("https://dummyjson.com/recipes");
  const recipe = data.recipes;
  console.log(params.recipeid);
  
  const response = recipe.find((x) => x.id == params.recipeid);

  if (!response) {
    return Response.json("erore");
  }

  return Response.json(response);
}
     