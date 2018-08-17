const posts = [{
        title: 'Post One',
        body: 'Body of Post One'
    },
    {
        title: 'Post Two',
        body: 'Body of Post Two'
    },
    {
        title: 'Post Three',
        body: 'Body of Post Three'
    }
]

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach(post => {
            output += `<li>${post.title}</li>`
        });
        document.getElementById('display').innerHTML = output;
    }, 1000)
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000)
}
createPost({
    title: 'Post Four',
    body: 'Body of Post Four'
}, getPosts)

// getPosts();