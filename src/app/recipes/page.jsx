
import GetData from "@/utils/fetchData";
import Link from "next/link";
import React from "react";
// import { useRouter } from "next/router";
import { Suspense } from "react";


export const metadata = {
  title: 'recipe food ',
  description: 'all foods ',
}

export default async function recipes() {
  const foodsRecipes = await GetData("https://dummyjson.com/recipes");
  const recipesArr = await foodsRecipes.recipes;
  // const router=useRouter()
  return (
    <>
      <Suspense fallbac={<p>loding...........</p>}k >
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
                {/* <button className="p-3 bg-green-300 "onClick={()=>router.push(`/recipes/${x.id}`)}>Go to resepe</button> */}
               </Link>
              </div>
            </>
          );
        })}
      </div>
      
      </ Suspense>
    </>
  );
}
