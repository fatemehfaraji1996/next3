"use client";
import React from "react";
import { useState } from "react";

export default function CreatPost() {
  const [title, settitle] = useState();
  async function handlsubmit(e) {
    e.preventDefault()
    settitle('')
  }

  return (
    <form onSubmit={(e) => handlsubmit()}>
      <div className="m-5 bg-lime-200 w-72">
        <p className="m-10 italic  ">creat new post</p>
        <p>post</p>
        <input value={title}  placeholder="Enter your post" onChange={(e)=>settitle(e.target.value)} className="bg-lime-300 p-4 m-2" type="text" />
        <p> caption</p>
        <input placeholder="Enter your caption" className="bg-lime-300 p-4 m-2" type="text" />
        <button type='submit' className="bg-lime-400 p-3 ">Add Post</button>
      </div>
    </form>
  );
}
