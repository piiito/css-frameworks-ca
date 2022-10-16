import { removePost } from "../apicalls/removepost.mjs"


// Delete button eventListener

export function removePostFormEventListener() {

    let removePostButton = document.createElement("button");
    removePostButton.classList.add("delete-button");
    removePostButton.innerHTML = "Delete";
    document.getElementById("single-post-body").append(removePostButton);
    const url = new URL(location.href);
    const id = url.searchParams.get("id");
    

    removePostButton.addEventListener("click", (event) => {
        event.preventDefault();
        try {(removePostButton = event.target)
        removePost(id)
        }
        catch (error){

        }
        
        alert("Post was successfully deleted");
        window.location.href="/posts.html";
       
    });
   
}

