
import RenderPostById from "@/components/RenderPostById";
import GetById from "@/utils/GetById";
import { notFound } from "next/navigation";

export default async function page({ params }) {
  const resss = await GetById(
    `http://localhost:3000/api/admin/posts/${params.postid}`
  );
  
  if (!resss.views) {
    notFound();
  }
return(
  <>
  <RenderPostById post={resss} />
  </>
)

  
}
