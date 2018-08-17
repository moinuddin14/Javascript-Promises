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

function createPost(post) {
    // Delibertely throw error
    // throw new Error('Error...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const err = false;

            if (posts.length > 3)
                resolve('There are posts...');
            else
                reject('No posts data...');
        }, 2000)
    })
}


createPost({
        title: 'Post Four',
        body: 'Body of Post Four'
    })
    .then(() => posts.length)
    .then(() => length)
    .then(length => {
        if (length > 0) {
            console.log(`There are ${length} posts present`);
            getPosts();
        } else {
            console.log('No posts... :(');
        }
    })
    .catch(err => console.log(err));