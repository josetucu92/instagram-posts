const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const myContent = document.getElementById("#my-content");

const displayInHtml = posts.map((post) => {
  return `
	<div class='flex'>
    <div class="content">
    <div class="top-container">
      <img class="logo-img" src="images/logo.png" />
      <img class="avatar-img" src="images/user-avatar.png" />
    </div>

    <div class="header">
      <img
        class="avatar-img margin"
        src='${post.avatar}'
        alt="${post.name} avatar"
      />
      <div>
        <div>
          <span class="name">${post.name}</span>
        </div>
        <span class="location">${post.location}</span>
      </div>
    </div>

    <img class="post" src="${post.post}" alt="${post.name} Portrait" />

    <div class="margin-top">
      <img
        class="interaction-btn margin"
        src="images/icon-heart.png"
        alt="icon-heart"
      />
      <img
        class="interaction-btn spacing"
        src="images/icon-comment.png"
        alt="icon-comment"
      />
      <img
        class="interaction-btn spacing"
        src="images/icon-dm.png"
        alt="icon-dm"
      />
    </div>

    <span id="likes-el" class="accent-font">${post.likes} likes</span>

    <div class="margin-top margin-btm">
      <div><span class="accent-font">${post.username}</span></div> 
			<div><span class="size">${post.comment}</span></div>
    </div>
  </div>
  </div>
    `;
});

myContent.innerHTML = displayInHtml;
