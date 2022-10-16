import { readPost } from "../apicalls/getpost.mjs"
import { updatePost } from "../apicalls/updatepost.mjs"


// UpdatePost eventListener

export async function updatePostFormEventListener() {
    const updatePostForm = document.querySelector("#update-post-form");
    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    const post = await readPost(id);
    updatePostForm.title.value = post.title;
    updatePostForm.body.value = post.body;
    updatePostForm.media.value = post.media;

    updatePostForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const updatePostForm = e.target;
        const formData = new FormData(updatePostForm);
        const updatePostData = Object.fromEntries(formData.entries());
        updatePostData.id = id;
        
        updatePost(updatePostData);

       
    });
}
