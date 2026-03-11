// Asynchronous JavaScript: The Big Picture
//Imagine you're at a coffee shop. You order a coffee, and you have two choices:
//Synchronous: Stand at the counter, stare at the barista, do nothing until your coffee is ready.
//Asynchronous: Take a number, go sit down, check your phone, chat — the barista calls you when it's ready.
//JavaScript is single-threaded (one thing at a time), so async let it "go sit down" while waiting for slow things like network requests or file reads.

const postsdiv = document.getElementById('posts');

//A Promise is an object that represents a value that will exist in the future. It's in one of 3 states:
//pending - Still waiting, fulfilled -Done, got the value ✅ rejected - Failed, got an error ❌

//async on a function means it will always return a Promise, no matter what
async function fetchposts() {

//await - pauses execution inside that function until the Promise settles. It does NOT freeze the whole program — other things keep running
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