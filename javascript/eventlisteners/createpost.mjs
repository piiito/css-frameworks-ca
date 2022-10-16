import { createPost } from "../apicalls/createpost.mjs"


// Create post eventListener

export function createPostFormEventListener() {
    const createPostForm = document.querySelector("#create-post-form");

    createPostForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const createPostForm = e.target;
        const formData = new FormData(createPostForm);
        const newPostData = Object.fromEntries(formData.entries());
        
        createPost(newPostData);
       
    });}

   

