'use server'

import { revalidateTag } from "next/cache"

export async function addUser(reacTtitle) {
    fetch('https://dummyjson.com/posts',
        // fetch('http://localhost:3000/api/admin/posts',
        {method: "POST", body: JSON.stringify({ username: "example" })})
        revalidateTag('recatch')
}