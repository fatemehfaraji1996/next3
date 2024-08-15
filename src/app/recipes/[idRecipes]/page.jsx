import React from 'react'

import GetData from '@/utils/fetchData'
//  import notFound from '@/app/not-found'


export async function generatametadata ({params,serchparams}) {
  return{
    title:'recipe your select food',
    description:'recipe foods '
  }
}
export default async function page({params}) {
  const recipeById = await GetData(`https://dummyjson.com/recipes/${params.idRecipes}`)
  

  // if (recipeById.image) {
    
    return (<>
    <div className='w-3/4 bg-lime-300 p-5'>
    <img className='w-3/3  p-5' src={recipeById.image} alt="" />
    <h1 className="text-xl p-5 ">{recipeById.name}</h1>
      <p>instructions:{ recipeById.instructions}</p>
    </div>
    </>
    )
  // }else{
// notFound()
  // }
}
