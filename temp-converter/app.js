/*
    To convert temperatures in degrees Celsius to Fahrenheit, multiply by 1.8 (or 9/5) and add 32.
 */

const inputValue = document.querySelector('#temp'),
      results = document.querySelector('.results'),
      convertBtn = document.querySelector('#convert'),
      loading = document.querySelector('.loading');

// Load All Event Listeners

loadAllEventListeners();

function loadAllEventListeners() {
    results.style.display = 'none';
    loading.style.display = 'none';

    // Convert Value and display
    convertBtn.addEventListener('click', convert);

}

// Convert
function convert(e) {

    if(isFinite(inputValue.value)) {

        document.querySelector('.temperature').innerHTML = '';

        loading.style.display = 'block';
        results.style.display = 'none';

        let calc = Number(parseFloat(inputValue.value));
        let toFah = calc * 1.8;

        // Create p tag
        const text = document.createElement('p');

        text.innerHTML = `${Number(toFah.toFixed(2))} &#8457;`;
        text.style.fontSize = '24px';
        text.style.fontWeight = 'bold';

        document.querySelector('.temperature').appendChild(text);

        inputValue.value = '';

        setTimeout(function(){
            loading.style.display = 'none';
            results.style.display = 'block';
        }, 2000);

    } else {
        showMessage(`${inputValue.value} is not a valid number, please try again`, 'red');
    }

    e.preventDefault();
}

function showMessage(msg, color) {
    results.style.display = 'none';
    loading.style.display = 'none';

    // Create Div
    const errorDiv = document.createElement('div');
    // Add Class
    errorDiv.className = 'message';
    //Create p tag
    const text = document.createElement('p');
    // Create text node and append into p tag
    text.appendChild(document.createTextNode(msg));

    errorDiv.appendChild(text);

    // Error Div styling
    errorDiv.style.borderColor = color;
    text.style.color = color;

    const card = document.querySelector('.card'),
          form = document.querySelector('#temp-form');

    card.insertBefore(errorDiv, form);

    setTimeout(function(){
        errorDiv.remove();
    }, 3000);
}
