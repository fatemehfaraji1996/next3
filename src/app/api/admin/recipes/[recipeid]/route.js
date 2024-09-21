import GetData from "@/utils/fetchData";
import { data } from "../route";
// import { data } from "../../posts/route";
console.log(data);

export async function GET(req, { params }) {
  const data = await GetData("https://dummyjson.com/recipes");
  const recipe = data.recipes;
  const response = recipe.find((x) => x.id == params.recipeid);
  if (!response) {
    return Response.json("erore");
  }
  return Response.json(response);
}

export async function PATCH(req, { params }) {
  const userId = parseInt(params.id);
  const updatedInfo = await req.json();

  const userIndex = data.findIndex((x) => x.id === userId);
  if (userIndex === -1) {
    return new Response(JSON.stringify({ message: "User not found" }), {
      status: 404,
    });
  }

  data[userIndex] = { ...data[userIndex], ...updatedInfo };

  return new Response(JSON.stringify(data[userIndex]), { status: 200 });
}



export async function DELETE(req, { params }) {
  // console.log( params.recipeid);
// console.log(req.body);

  const id = parseInt(params.recipeid,10);
  // console.log(id);
  const index = data.findIndex((x) => x.id == id);

  if (index == -1) {
    return new Response(JSON.stringify({ error: "Item not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  const deleted = data.splice(index, 1)[0];

  return new Response(JSON.stringify(deleted), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}