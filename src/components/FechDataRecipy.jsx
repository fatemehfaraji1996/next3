import React from "react";
import GetData from "@/utils/fetchData";
import ResepiCards from "./ResepiCards";




export default async function FechDataRecipy() {
  const foodsRecipes = await GetData("https://dummyjson.com/recipes");
  const recipesArr = await foodsRecipes.recipes;
  return (
    recipesArr
  )

}
