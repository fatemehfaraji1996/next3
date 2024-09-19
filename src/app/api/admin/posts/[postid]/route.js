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
  
  const post = data.find((x) => x.id == parseInt(params.postid));
  // if (!response) {
  //   return Response.json("erore");
  // }
  return Response.json(post);
}



// import GetData from "@/utils/fetchData";

// export async function GET(req, { params }) {
//  try {
//  const data = await GetData(`http://localhost:3000/api/admin/posts/${params.postid}`);

//  const post = data.find((x) => x.id === parseInt(params.postid));

//  if (!post) {
//   return Response.json("error", { status: 404 });
//  }
//  return Response.json(post);
//  } catch (error) {
//  console.error('Error fetching data:', error);
//  return Response.json("Internal Server Error", { status: 500 });
//  }
// }