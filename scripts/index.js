const URL = 'https://api.kanye.rest' 

function postKanyeQuote(body) {
    return fetch(URL, {
        method: 'POST'
        headers: {
            'Accept': 'applicaton/json'
        },
        body: JOSN.stringify()
    })
    .then(res => res.json())
}
postKanyeQuote({joke: "something"})
