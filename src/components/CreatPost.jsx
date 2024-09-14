"use client";
import { addUser } from "@/utils/actions";
import React from "react";
import { useState } from "react";

export default function CreatPost() {
  const [title, setTitle] = useState();
  async function handleSubmit(e) {
    e.preventDefault();
    await addUser(title);
    // setTitle("");
  }

  return (

    
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="m-5 bg-lime-200 w-72">
        <p className="m-10 italic  ">creat new post</p>
        <p>post</p>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <p> caption</p>
        {/* <input
          placeholder="Enter your caption"
          className="bg-lime-300 p-4 m-2"
          type="text"
        /> */}
        <button type="submit" className="bg-lime-400 p-3 ">
          Add Post
        </button>
      </div>
    </form>
  );
}
