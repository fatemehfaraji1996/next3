import React from "react";
import GetData from "@/utils/fetchData";
import Image from "next/image";
import { notFound } from "next/navigation";
import RenderRecipeById from "@/components/RenderRecipeById";
export async function generateMetadata({ params, searchParams }) {
  return {
    title: `recipe${params.idRecipes}`,
    // title:`recipe${params.idRecipes} - ${searchParams.q}`,
    description: "recipe foods ",
  };
}
export default async function page({ params }) {
  const recipeById = await GetData(
    `http://localhost:3000/api/admin/recipes/${params.idRecipes}`
  );
  if (!recipeById.name) {
    notFound();
  }
  return (
    <>
 <RenderRecipeById recipe={recipeById}/>
    </>
  );
}
