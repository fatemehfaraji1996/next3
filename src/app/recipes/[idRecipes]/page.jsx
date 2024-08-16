import React from 'react'
import GetData from '@/utils/fetchData'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export async function generateMetadata ({params,searchParams}) {
  return{
    title:`recipe${params.idRecipes}`,
    // title:`recipe${params.idRecipes} - ${searchParams.q}`,
    description:'recipe foods '
  }
}
export default async function page({params}) {
  const recipeById = await GetData(`https://dummyjson.com/recipes/${params.idRecipes}`)
  
    if (!recipeById.name) {
      notFound()
    }
    return (<>
    <div className='w-3/4 bg-lime-300 p-5'>
    <Image
      src={recipeById.image}
      width={500}
      height={500}
      alt="Picture of the author"
    />
    <h1 className="text-xl p-5 ">{recipeById.name}</h1>
      <p>instructions:{ recipeById.instructions}</p>
    </div>
    </>
    )

}
