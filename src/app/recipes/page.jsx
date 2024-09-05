import ResepiCards from "@/components/ResepiCards";
import GetData from "@/utils/fetchData";
import React from "react";

import { Suspense } from "react";
export const metadata = {
  title: "recipe food ",
  description: "all foods ",
};

export default async function recipes() {
  const recipes = await GetData("http://localhost:3000/api/admin/recipes");

  return (
    <Suspense fallbac={<p>loding...........</p>} k>
      <ResepiCards recipesArr={recipes} />
    </Suspense>
  );
}
