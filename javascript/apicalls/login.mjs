import { mainAPI_URL } from "./constants.mjs"
import { loginEndpoint } from "./constants.mjs"
import { saveToStorage } from "../storage.mjs"



//Send login form to API function


export async function loginAccount(profile){
    const response = await fetch (mainAPI_URL + loginEndpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(profile)
     })

    const result = await response.json();
    const token = result.accessToken;
    
    saveToStorage("token", token);
    saveToStorage("profile", profile);
    
    if (token) {
        window.location.href="/posts.html";
    
    }
}
