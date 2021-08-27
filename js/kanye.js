const loadQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(s => s.json())
        .then(data => showQuote(data))
    
}

const showQuote = data => {
    // console.log(data.quote)
    document.getElementById('quote').style.display = 'block';
    document.getElementById('quote').innerText = data.quote;
    
}

loadQuote()
