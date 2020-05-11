const name = 'Dan';
const age = 26;
const job = 'Web Developer';
const city = 'Kidderminster';
let html;
// Without template strings (es5)

html = '<ul>' +
    '<li>Name: ' + name + '</li>' +
    '<li>Age: ' + age + '</li>' +
    '<li>Job: ' + job + '</li>' +
    '<li>City: ' + city + '</li>' +
    '</ul>';

function hello() {
    return 'hello';
}

// With Template literals
html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${2 + 2}</li>
        <li>${hello()}</li>
        <li>${age > 25 ? 'Over 25' : 'Under 25'}</li>
    </ul>
`;

document.body.innerHTML = html;