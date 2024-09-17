'use server'

import { revalidateTag } from "next/cache"

// export async function addUser(reacTtitle) {
//     fetch('https://dummyjson.com/posts',
//         // fetch('http://localhost:3000/api/admin/posts',
//         {method: "POST", body: JSON.stringify({ username: "example" })})
//         revalidateTag('recatch')
// }

export async function addUser(userInfo) {
    try {
      const response = await fetch("http://localhost:3000/api/admin/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      revalidateTag("recatch");
    } catch (error) {
      console.error("Failed to add recipe:", error);
    }
  }