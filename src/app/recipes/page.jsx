import GetData from "@/utils/fetchData";
import Link from "next/link";
import React from "react";

export default async function recipes() {
  const foodsRecipes = await GetData("https://dummyjson.com/recipes");
  const recipesArr = await foodsRecipes.recipes;
  return (
    <>
      {" "}
      <div className="flex flex-wrap gap-5  p-10">
        {recipesArr.map((x) => {
          return (
            <>
              <div className="bg-lime-200 w-1/3 p-7 ">
                <h1 className="text-xl p-5 ">{x.name}</h1>
                <hr />
                <p className="p-5">{x.ingredients}</p>
               <Link href={`/recipes/${x.id}`}>
                <button className="p-3 bg-green-300 ">Go to resepe</button>
               </Link>
              </div>
            </>
          );
        })}
      </div>
      ;
    </>
  );
}
