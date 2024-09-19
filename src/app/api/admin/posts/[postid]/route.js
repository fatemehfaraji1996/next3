import { data } from "../route";
export async function GET(req, { params }) {
  const post = data.find((x) => x.id === parseInt(params.postid));

  return Response.json(post);
}
export async function DELETE(req, { params }) {
  params.postid;
  const id = parseInt(params.postid, 10);
  // console.log(id);
  const index = data.findIndex((x) => x.id === id);

  if (index === -1) {
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
