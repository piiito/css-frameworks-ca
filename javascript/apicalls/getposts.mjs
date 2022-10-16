import { mainAPI_URL } from "./constants.mjs"
import { PostEndpoint } from "./constants.mjs"
import { loadFromStorage } from "../storage.mjs"
import { searchPosts } from "../eventlisteners/search.mjs"



// Show posts
export async function  readPosts(){
    const token = loadFromStorage("token");

    const response = await fetch (`${mainAPI_URL}${PostEndpoint}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
     })

    const posts = await response.json();
    searchPosts(posts);
    return posts
    

}