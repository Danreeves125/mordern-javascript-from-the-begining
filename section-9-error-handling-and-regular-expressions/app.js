let re;

// Literal Characters
re = '/hello/';

// Metacharacter Symbols
re = /^h/i; // Must start with
re = / world$/i; // Must end with
re = /^hello$/i; // Must begin and end with
re = /h.llo/i; // Match any ONE character
re = /h*llo/i; // Match any character 0 or more times, it's a complete wildcard
re = /gre?a?y/i; // Optional Character
re = /gre?a?y\?/i; // Escape Character

// Brackets [] - Character Sets
re = /gr[ae]y/i; // Must be a or e
re = /[gf]ray/i; // Must be g or f
re = /[^gf]ray/i; // Match anything except g or f
re = /[A-Z]ray/; // Match any uppercase letter
re = /[A-Za-z]ray/; // Match any letter
re = /[0-9]/; // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i // Must occur exactly {m} amount
re = /Hel{2,4}o/i // Must occur exactly {m}
re = /Hel{2,}o/i // Must occur at least {m} times

// Paretheses ()- Grouping
re = /^([0-9]x{3}$)/

// Shorthand Character Classes
re = /\w/; // Word character - alphanumeric or _
re = /\w+/; // + = 1 or more
re = /\W/; // Non-word character
re = /\d/; // Match any digit
re = /\d+/; // Match any digit 0 or more times
re = /\D/; // Match any Non-digit
re = /\S/; // Match Non-whitespace character
re = /Hell\b/i; // Word boundary

// Assertions
re = /x(?=y)/; // Match x only if follow by y
re = /x(?!y)/; // Match x only if NOT follow by y


// String to match
const str = 'Hello, welcome to Hell';

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if(re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} does Not match ${re.source}`);
    }
}

reTest(re, str);