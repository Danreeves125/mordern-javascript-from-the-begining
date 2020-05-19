const posts = [
    {title: 'Post 1', post: 'this is post one'},
    {title: 'Post 2', post: 'this is post one'},
];

// Callbacks are a function that can call another function
function createPost(post) {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            posts.push(post);

            let error = true;

            if(!error) {
                resolve();
            } else {
                reject('Something went wrong');
            }
        }, 2000);
    });
}

function getPosts() {
    setTimeout(function(){
        let output = '';

        posts.forEach(function(post){
            output += `<li>${post.title}</li>`;
        });

        document.body.innerHTML = output;
    }, 1000);
}

createPost({title: 'Post 3', body: 'This is post 3'})
    .then(getPosts)
    .catch(function(error){
        console.log(error);
    });