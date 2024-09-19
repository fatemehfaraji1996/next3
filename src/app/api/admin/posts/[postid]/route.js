import GetData from "@/utils/fetchData";
import { data } from "../route";
export async function GET(req, { params }) {

  const post = data.find((x) => x.id === parseInt(params.postid));
 
  return Response.json(post);
}