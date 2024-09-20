'use client'
import React from 'react'
import { useState } from 'react';

export default function RenderPostById({post}) {
  const resss = post
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(resss.title);
  const [body, setBody] = useState(resss.body);
  const [tags, setTags] = useState(resss.tags.join(", "));

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    console.log("Saved:", { title, body, tags });
    setIsEditing(false);
  };

  return (
    <>
      <div className="flex w-auto bg-lime-200 p-10">
        <div className="border-8 p-5">
          {isEditing ? (
            <>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border p-1 mb-2 h-36 w-2/3 "
              />
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="border p-1 mb-14  h-auto "
              />
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className="border p-1 mb-2 h-60"
              />
              <button onClick={handleSave} className="bg-lime-900 h-10 ">
                {" "}
                Save
              </button>{" "}
            </>
          ) : (
            <>
              <p>{title}</p>
              <br />
              <p>{body}</p>
              <div className="bg-slate-500 flex">
                <p className="bg-gray-300"> #{tags}</p>
              </div>
              <p>UserID: {resss.userId}</p>
              <button onClick={handleEditClick} className="bg-lime-900 h-14">
                EDIT
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
