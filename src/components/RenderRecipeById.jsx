'use client'
import React from 'react'
import { useState } from 'react';
export default function RenderRecipeById({recipe}) {

    const recipeById =recipe
    const [Editing, setEditing] = useState('');
    const handelChange = (e)=>{
console.log(e.target.defaultValue);

    }
  return(
    <div className="w-3/4 bg-lime-300 p-5">
    {/* <Image
      src={recipeById.image}
      width={500}
      height={500}
      alt="Picture of the author"
    /> */}
    <h1 className="text-xl p-5 ">{recipeById.name}</h1>
    <p>instructions:{recipeById.instructions}</p>
    <p>#{recipeById.tags}</p>
    <button className='bg-green-600 p-5'>Edit Recipe</button>
    <input  onChange={handelChange} defaultValue={recipeById.tags}  type="text"  />
  </div>
  )
}
// import React, { useState } from 'react';

// export default function RenderRecipeById({ recipe }) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [updatedRecipe, setUpdatedRecipe] = useState(recipe);

//   const handleEditClick = () => {
//     setIsEditing(!isEditing);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUpdatedRecipe((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async () => {
//     const response = await fetch(`/api/recipes/${recipe.id}, {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(updatedRecipe),
//     }`);

//     if (response.ok) {
//       const updatedData = await response.json();
//       console.log('Recipe updated:', updatedData);
//       setIsEditing(false); // بعد از ویرایش، حالت ویرایش را خاموش می‌کنیم
//     } else {
//       console.error('Failed to update recipe');
//     }
//   };

//   return (
//     <div className="w-3/4 bg-lime-300 p-5">
//       {isEditing ? (
//         <>
//           <input
//             type="text"
//             name="name"
//             value={updatedRecipe.name}
//             onChange={handleChange}
//             className="border p-2 mb-2"
//           />
//           <textarea
//             name="instructions"
//             value={updatedRecipe.instructions}
//             onChange={handleChange}
//             className="border p-2 mb-2"
//           />
//           <input
//             type="text"
//             name="tags"
//             value={updatedRecipe.tags}
//             onChange={handleChange}
//             className="border p-2 mb-2"
//           />
//           <button onClick={handleSubmit} className='bg-blue-600 p-2'>
//             Save Changes
//           </button>
//         </>
//       ) : (
//         <>
//           <h1 className="text-xl p-5">{recipe.name}</h1>
//           <p>Instructions: {recipe.instructions}</p>
//           <p>Tags: #{recipe.tags}</p>
//           <button onClick={handleEditClick} className='bg-green-600 p-5'>
//             Edit Recipe
//           </button>
//         </>
//       )}
//     </div>
//   );
// }