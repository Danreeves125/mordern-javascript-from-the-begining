document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

// get local text data
function getText() {
    fetch('test.txt')
        .then(response => response.text())

        .then(data => {
            document.getElementById('output').innerHTML = data;
        })

        .catch(error => console.log(error));
}

function getJson() {
    fetch('posts.json')
        .then(response => response.json())

        .then(data => {
            let output = '';
            data.forEach(post => {
                output += `
                <li>${post.title}, ${post.body}</li>
            `
            })
            document.getElementById('output').innerHTML = output;
        })

        .catch(error => console.log(error));
}


function getExternal() {
    fetch('https://api.github.com/users/')
        .then(res => res.json())
        .then(data => {
            let output = '';
            data.forEach(function (user) {
                output += `
                <li>${user.login}, ${user.url}</li>
            `
            });
            document.getElementById('output').innerHTML = output;
        })

        .catch(error => console.log(error));
}