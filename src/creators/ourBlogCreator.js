const blogPostContainer = document.querySelector(".blog .container .row");

const createPost = (heading, category, info, description, postImage) => {
  return `<div class="co-md-6 col-lg-4">
                <div class="box">
                <div class="image">
                    <img src="${postImage}" alt="" />
                    <a href="#" class="cate">${category}</a>
                </div>
                <div class="text">
                    <h3><a href="#">${heading}</a></h3>
                    <h4>${info}</h4>
                    <p>
                        ${description}
                    </p>
                </div>
                </div>
            </div>`;
};

export function createOurBlog(
  data,
  headingKey = "heading",
  categoryKey = "category",
  infoKey = "info",
  descriptionKey = "description",
  postImageKey = "postImage"
) {
  blogPostContainer.innerHTML = "";
  data.forEach((x) => {
    const post = createPost(
      x[headingKey],
      x[categoryKey],
      x[infoKey],
      x[descriptionKey],
      x[postImageKey]
    );
    blogPostContainer.innerHTML += post;
  });
}
