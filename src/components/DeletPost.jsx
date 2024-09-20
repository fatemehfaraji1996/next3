'use client'
import { DeletPostById } from '@/utils/actions'
import React from 'react'
export default function DeletPost({id}) {
  // console.log({id});
  
   const handelDelet= async()=>{
    DeletPostById(id)
    console.log(id);
   }
  return (
    <button onClick={handelDelet} className="bg-red-600 w-28 p-4 m-10 h-20">Delet Post</button>
  )
}
