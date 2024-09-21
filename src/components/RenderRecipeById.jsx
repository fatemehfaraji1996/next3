import React from 'react'
export default function RenderRecipeById({recipe}) {
    const recipeById =recipe
  return (
    <div className="w-3/4 bg-lime-300 p-5">
    {/* <Image
      src={recipeById.image}
      width={500}
      height={500}
      alt="Picture of the author"
    /> */}
    <h1 className="text-xl p-5 ">{recipeById.name}</h1>
    <p>instructions:{recipeById.instructions}</p>
    <p>#{recipeById.tags}</p>
  </div>
  )
}
