
import React from "react";
import GetData from "@/utils/fetchData";
export default async function User() {
  const users =  GetData('https://dummyjson.com/users')
  return (
      <>
      
      <p>asdfcv</p>
    </>
  );
}
