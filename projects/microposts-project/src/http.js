class EasyHttp {
    // Make HTTP GET Request
    async get(url) {
        const response = await fetch(url);

        const resData = response.json();

        return resData;
    }

    // Post Request
    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data),
        });

        const resData = response.json();

        return resData;
    }


    // Put Request
    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data),
        })
        const resData = response.json();

        return resData;
    }

    // Make an HTTP DELETE Request
    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
        })

        const resData = await 'Resource Delete';

        return resData;
    }
}

export const http = new EasyHttp();
