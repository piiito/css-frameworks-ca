import { mainAPI_URL } from "./constants.mjs"
import { PostEndpoint } from "./constants.mjs"
import { loadFromStorage } from "../storage.mjs"



// Show post function
export async function readPost(id){
    const token = loadFromStorage("token");

    const response = await fetch (`${mainAPI_URL}${PostEndpoint}/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
     })

    const posts = await response.json();
    console.log(posts);
    return posts

}