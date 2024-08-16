'use client'

// import Homepage from "@/components/HomePage";
import dynamic from 'next/dynamic'
export default function Home() {
  const lazy = dynamic(() => import("../../src/components/HomePage"), {
    loading: () => <p>Loading...</p>,
  });
  // console.log(lazy);
  
  return (
    <>
    <p>hello</p>
    {lazy}
    </>
    
  
  )
     
  
  
}
