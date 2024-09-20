"use client";
import { addUser } from "@/utils/actions";
import React from "react";
import { useState } from "react";
export default function CreatPost() {
  const [post, setPost] = useState({
    title: "",
    body: "",
    id: "",
  });
  async function handleSubmit(e) {
    e.preventDefault();
    // const randomId = "458";
    const randomId = Math.floor(Math.random() * 1000000 + 1);

    const newPost = {...post, id:randomId };
    // console.log(newPost);

    await addUser(newPost);
    setPost({ title: "", body: "", id: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="m-5 bg-lime-200 w-72">
        <p className="m-10 italic  ">creat new post</p>
        <p>post</p>
        <input
          placeholder="Enter your cpost"
          className="bg-lime-300 p-4 m-2"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />

        <p> caption</p>
        <input
          placeholder="Enter your caption"
          className="bg-lime-300 p-4 m-2 h-48"
          type="text"
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
        />
        <button type="submit" className="bg-lime-400 p-3 ">
          Add Post
        </button>
      </div>
    </form>
  );
}
