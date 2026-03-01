const postsdiv = document.getElementById('posts');

async function fetchposts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    postsdiv.innerHTML = "";

    data.forEach(post => {
        const div = document.createElement("div");
        div.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        `;
        postsdiv.appendChild(div);
    });
}
document.getElementById("loadPosts").onclick = fetchposts;