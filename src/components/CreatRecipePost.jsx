import React from "react";

export default function CreatRecipePost() {
  return (
    <form action="" >
      <div className="m-5 bg-green-500  p-5">
        <input
          placeholder={"inter your recepi name"}
          className="bg-lime-200 p-4 m-4"
          type="text"
        />
        <input
          placeholder={"inter your recepi placeholder"}
          className="bg-lime-200 h-44 m-4"
          type="text"
        />

        <input
          placeholder={"inter your recepi placeholder"}
          className="bg-lime-200 h-44 m-4"
          type="text"
        />
        <button type="submit" id="addb" className="bg-lime-400 p-4 ">
          Add Recipe
        </button>
      </div>
    </form>
  );
}
