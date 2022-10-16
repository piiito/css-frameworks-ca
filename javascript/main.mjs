import { setLoginFormEventListener } from "./eventlisteners/login.mjs"
import { setRegistrationFormEventListener} from "./eventlisteners/register.mjs"
import { createPostFormEventListener } from "./eventlisteners/createpost.mjs"
import { updatePostFormEventListener } from "./eventlisteners/updatepost.mjs"
import { removePostFormEventListener } from "./eventlisteners/removepost.mjs"
import { searchPosts } from "./eventlisteners/search.mjs"
import { makePostTemplate } from "./templates/post.mjs"
import { makePostsTemplate } from "./templates/post.mjs"


const path = location.pathname;



if (path === "/index.html"){
    setLoginFormEventListener();
    
} else  if(path === "/register.html"){
    setRegistrationFormEventListener();

} else if(path === "/posts.html"){
    makePostsTemplate();
    
    searchPosts();
    removePostFormEventListener();
    
} else if(path === "/post.html"){
    makePostTemplate();
    
    removePostFormEventListener();
    
}else if(path === "/createpost.html"){
    createPostFormEventListener();
    
}else if(path === "/updatepost.html"){
    updatePostFormEventListener();
    
}


// loginAccount();

// registerAccount();

// readPosts();

// removePost();

// readPost();

// removePost();

// createPost();

// updatePost();




