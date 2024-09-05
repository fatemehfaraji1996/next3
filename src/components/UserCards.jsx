import React from "react";
import GetData from "@/utils/fetchData";
import Link from "next/link";

export default async function UserCards() {
  const users = await GetData("http://localhost:3000/api/admin/users");
  // console.log(users);

  // const dataOfUsers = users.users;
  // console.log(dataOfUsers);

  return (
    <>
      <button id="addb" className="bg-lime-400 p-4 ">
        Add User
      </button>
      <input className="bg-lime-200 p-4" type="text" />
      <div className="flex flex-wrap gap-10 bg-green-100 mt-9 p-10 ">
        {users.map((x) => (
          <Link href={`/users/${x.id}`}>
            <button className=" border-2 p-4 border-lime-300">
              {x.username}
            </button>
          </Link>
        ))}
      </div>
    </>
  );
}
