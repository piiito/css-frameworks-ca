import { mainAPI_URL } from "./constants.mjs"
import { PostEndpoint } from "./constants.mjs"
import { loadFromStorage } from "../storage.mjs"



// Delete function

export async function  removePost(id){

    const token = loadFromStorage("token");

   const response = await fetch (`${mainAPI_URL}${PostEndpoint}/${id}`, {
       method: "DELETE",
       headers: {
           "Content-Type": "application/json",
           "Authorization": `Bearer ${token}`
       },
    })

   const post = await response.json();
   return post
   }
