document.querySelector('#button').addEventListener('click', loadData);

function loadData() {
    // Create XHR Object
    const xhr =  new XMLHttpRequest();

    // Open - specific the type of request we want to make and the file we want to make it too.
    xhr.open('GET', 'data.txt', true);
    // console.log(xhr.readyState);

    // optional = Used for spinner/ loaders
    xhr.onprogress = function() {
        console.log(xhr.readyState);
    }

    xhr.onload = function(){
        console.log(xhr.readyState);

        if(this.status === 200) {
            // console.log(this.responseText);
            document.querySelector('#output').innerHTML = `<h1>${this.responseText}</h1>`
        }
    }

    // xhr.onreadystatechange = function() {
    //     console.log(xhr.readyState);
    //     if(this.status === 200 && this.readyState === 4) {
    //         console.log(this.responseText);
    //     }
    // }

    xhr.onerror = function() {
        console.log('Request Error');
    }

    // This is needed to make it work
    xhr.send();

    /*
        readyState Values
        - 0: request not initialized
        - 1: server connection established
        - 2: request received
        - 3: processing request
        - 4: request finished and response is ready

        HTTP Statuses
        - 200: "OK"
        - 403: "Forbidden"
        - 404: "Not Found"

     */

}