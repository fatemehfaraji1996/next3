"use server";

import { revalidateTag } from "next/cache";
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
      const erroreData = await response.json();
      console.error("errrroredata:", erroreData);

      throw new Error("Network response was not ok");
    }

    revalidateTag("recatch");
  } catch (error) {
    console.error("ERRORE:", error);
  }
}

export async function DeletPostById(id) {
  await fetch(`http://localhost:3000/api/admin/posts/${id}`, {
    method: "DELETE",
  });
  revalidateTag("recatch");
}

//   PAGE RECEPI //////////////
export async function addRecipe(recipePost) {
  try {
    const response = await fetch("http://localhost:3000/api/admin/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipePost),
    });
    if (!response.ok) {
      const erroreData = await response.json();
      console.error("errrroredata:", erroreData);

      throw new Error("Network response was not ok");
    }

    revalidateTag("recatch");
  } catch (error) {
    // console.error("ERRORE:", error);
  }
}
// DELET RECEPI
export async function DeletRecipeById(id) {
  await fetch(`http://localhost:3000/api/admin/recipes/${id}`, {
    method: "DELETE",
  });
  // console.log(id);
  
  revalidateTag("recatch");
}