import React from 'react'
import GetData from "@/utils/fetchData";
export default async function users() {
  const users = await GetData("https://dummyjson.com/users");
  const dataOfUsers = users.users;
  return (
    <div className='flex flex-wrap gap-14 bg-green-100 mt-9 p-10 '>
        {dataOfUsers.map((x) => (
          <button className=' border-2 p-5 border-lime-300'>{x.username}</button>
        ))}
        
      </div>
  )
}
