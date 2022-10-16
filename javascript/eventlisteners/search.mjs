
// Search posts

export function searchPosts(posts) {
    const search = document.querySelector("#search");
  
    search.onkeyup = function (event) {
  
      const searchValue = event.target.value.trim().toLowerCase();
  
      const filteredPosts = posts.filter((post) => {
        if (post.title.toLowerCase().includes(searchValue)) {
          return true;
        }
      });
      renderPosts(filteredPosts);
    };
  }

  export function renderPosts(postsToRender) {
  const postContent = document.querySelector("#many-posts");

  postContent.innerHTML = "";

  postsToRender.forEach(function (postData) {
    postContent.innerHTML += `<div class="card"><a href="/post.html?id=${postData.id}"><img src="${postData.media}" class="card-img-top" alt="${postData.media}"/>
                                <div class="card-body">
                                <h2 class="card-title">${postData.title}</h2></a>
                                <p class="card-text">${postData.body}.</p>
                                <a class="btn btn-primary" href="/updatepost.html?id=${postData.id}">Update</a>
                                <p class="card-text">Created: ${postData.created}.</p></div>`;
  });
}
