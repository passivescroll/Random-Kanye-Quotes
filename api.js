const URL = 'https://api.kanye.rest'

function getKanyeQuote() {
    return fetch(URL, {
        headers: {
            'Accept': 'applicatoin/json'
        }
    })
    .then(res => res.json)
}