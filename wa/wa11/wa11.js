const button = document.querySelector("#js-new-quote")
button.addEventListener('click',getQuote);

const endpoint = 'https://official-joke-api.appspot.com/random_joke'

async function getQuote() {
    //console.log("It works!");
    try {
        const response = await fetch(endpoint)
        if(!response.ok){
            throw Error(response.statusText)
        }
        const json = await response.json();
        //console.log(json.type);
        displayQuote(json.setup)
        displayPunchline(json.punchline)
    }
        catch (err) {
            console.log(err);
            alert('Failed to fetch new trivia')
        }
}

function displayQuote(quote) {
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContent = quote;
    
}

function displayPunchline(punchline){
    const punchlineText = document.querySelector("#punchline-select");
    punchlineText.textContent = punchline;
}

getQuote()
