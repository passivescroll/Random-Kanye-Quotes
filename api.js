const URL = 'https://api.kanye.rest'

function getKanyeQuote() {
    return fetch(URL, {
        headers: {
            'Accept': 'application.json'
        }
    })
    .then(res => res.json)
    .then(data => {
        currentQuote = data
        const quote = data.quote
        quotePtag.innertext = quote
    })
}

function postKanyeQuote(body) {
    return fetch (URL, {
        method: 'POST',
        headers: {
            'Accept': 'applicaton/json'
        },
        body:JSON.stringify(body)
    })
    .then(res => res.json())
    
}


