const posts = [
    {title: 'Post 1', post: 'this is post one'},
    {title: 'Post 2', post: 'this is post one'},
];

// function createPost() {
//     setTimeout(function(){
//         posts.push(post);
//     }, 2000);
// }
//
// function getPosts() {
//     setTimeout(function(){
//         let output = '';
//
//         posts.forEach(function(post){
//            output += `<li>${post.title}</li>`;
//         });
//
//         document.body.innerHTML = output;
//     }, 1000);
// }
//
// createPost({title: 'Post 3', body: 'This is post 3'});
//
// getPosts();

// Callbacks are a function that can call another function
function createPost(post, callback) {
    setTimeout(function(){
        posts.push(post);
        callback();
    }, 2000);
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

createPost({title: 'Post 3', body: 'This is post 3'}, getPosts);