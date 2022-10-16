import { mainAPI_URL } from "./constants.mjs"
import { PostEndpoint } from "./constants.mjs"
import { loadFromStorage } from "../storage.mjs"



// Update post function
export async function  updatePost(postData){

    const token = loadFromStorage("token");

    const response = await fetch (`${mainAPI_URL}${PostEndpoint}/${postData.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(postData)
     })

    const post = await response.json();  
    const id = post.id;
    
    if (id) {
        alert("Your post was successfully updated!");
        window.location.href="/posts.html";

    }

}

