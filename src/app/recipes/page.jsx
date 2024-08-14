import GetData from '@/utils/fetchData'
import React from 'react'

export  default async function recipes() {
  const foodsRecipes= await GetData('https://dummyjson.com/recipes')
  const recipesArr=await foodsRecipes.recipes
  console.log(recipesArr);
  
  return (
    <>
    
    {
 recipesArr.map((x)=>{
   return(
     <p>{x.id}</p>
   )
 })
 
    }
    
    </>
  )
}
