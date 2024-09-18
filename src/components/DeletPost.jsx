'use client'
import { DeletPostById } from '@/utils/actions'
import React from 'react'

export default function DeletPost() {
   const handelDelet= async()=>{
    DeletPostById(id)
   }
  return (
    <button onClick={handelDelet} className="bg-red-600 w-28 p-4 m-10 h-20">Delet Post</button>
  )
}
