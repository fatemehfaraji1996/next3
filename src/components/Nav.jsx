'use client'
import Link from "next/link";
import React from "react";
import { usePathname } from 'next/navigation'
export default function Nav() {
  const pages = [
    { title: "users", rout: "/users" },
    { title: "posts", rout: "/postes" },
    { title: "recipes", rout: "/recipes" },
  ];
  const path = usePathname()
  return (

    <div className="flex gap-14 bg-green-300 p-8">
      {pages.map((item, i) => {
        return (

          <>
          
          <Link key={i} className="" href={item.rout}>
            {item.title} 
          </Link>
        
          </>
          
        );
      })}
    </div>


  );
}
