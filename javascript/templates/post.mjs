import { readPost } from "../apicalls/getpost.mjs"
import { readPosts } from "../apicalls/getposts.mjs"
// Post template

export function postTemplate(postData){
    const post = document.createElement("div");
    post.classList.add("card");
    post.innerHTML +=`<a href="/post.html?id=${postData.id}"><img src="${postData.media}" class="card-img-top" alt="${postData.title}"/>
                    <div class="card-body">
                    <h2 class="card-title">${postData.title}</h2></a>
                    <p class="card-text">${postData.body}.</p>
                    <a class="btn btn-primary" href="/updatepost.html?id=${postData.id}">Update</a>`
            
    return post;
    
}

// Single post

export function runPostTemplate(postData, parent){
    parent.append(postTemplate(postData));
}

export async function makePostTemplate(){
    const url = new URL(location.href);
    const id = url.searchParams.get("id");
    
    const post = await readPost(id);
    const container = document.querySelector("#single-post");
    runPostTemplate(post, container);
}

// Multiple posts

export function runPostsTemplate(postDataList, parent){
    parent.append(...postDataList.map(postTemplate))
    
    }

export async function makePostsTemplate(){
    const posts = await readPosts();
    const container = document.querySelector("#many-posts");
    runPostsTemplate(posts, container);
}
