import { mainAPI_URL } from "./constants.mjs"
import { PostEndpoint } from "./constants.mjs"
import { loadFromStorage } from "../storage.mjs"



// Post function
export async function  createPost(postData){

    const token = loadFromStorage("token");

    const response = await fetch (mainAPI_URL + PostEndpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(postData)
     })

    const post = await response.json();
    const id = post.id;
    
    if (id) {
        alert("Your post was successful");
        window.location.href="/posts.html";

    }
    return post;
    
}