"use client";
import { addRecipe } from "@/utils/actions";
import React, { useState } from "react";

export default function CreatRecipePost() {
  const [recipeName, setRecipeName] = useState("");
  const [recipeDescription, setRecipeDescription] = useState("");
  const [recipeTags, setRecipeTags] = useState("");

const handleSubmit = async (e) => {
    const randomId =  Math.floor(Math.random() * 1000000 + 1)
    console.log(randomId);
    e.preventDefault(); 
    const recipePost = {
      name: recipeName,
    //   description: recipeDescription,
    ingredients: recipeDescription,
    id:randomId,
      tags: recipeTags.split(",").map((tag) => tag.trim()), //
    };

    await addRecipe(recipePost);
    
    setRecipeName("");
    setRecipeDescription("");
    setRecipeTags("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="m-5 bg-green-500 p-5">
        <input
          placeholder={"Enter your recipe name"}
          className="bg-lime-200 p-4 m-4"
          type="text"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
        />
        <input
          placeholder={"Enter your recipe description"}
          className="bg-lime-200 h-44 m-4"
          type="text"
          value={recipeDescription}
          onChange={(e) => setRecipeDescription(e.target.value)}
        />
        <input
          placeholder={"Enter your recipe tags (comma separated)"}
          className="bg-lime-200 h-44 m-4"
          type="text"
          value={recipeTags}
          onChange={(e) => setRecipeTags(e.target.value)}
        />
        <button type="submit" id="addb" className="bg-lime-400 p-4">
          Add Recipe
        </button>
      </div>
    </form>
  );
}
