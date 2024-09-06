export async function addUser(reacTtitle) {
    fetch('https://dummyjson.com/posts',{method: "POST", body: JSON.stringify({ username: "example" })})
}