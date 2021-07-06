console.log('Welcome to Random Kanye Quotes!')

const URL = ('https://api.kanye.rest')

const quotePTag = document.querySelector('#quote-text')
const refreshButton = document.querySelector('#Refresh-button')
const favoriteButton = document.querySelector('#favorite-button')
const favoriteContainer = document.querySelector('#liked-quotes')

function fetchKanye() {
    return fetch(URL, {
        headers: {
            'Accept': 'applicaton/json'
        } 
    }).then(res => res.json())
}  
   

   


//function fetchKanye(){
//    return fetch(url, {
//        headers:{
//            'Accept': 'application/json'
//        }
//    }).then(res => res.json())
//      
//    
//}


//function fetchKanyeQuote() {
//    return fetch(URL, {
//        headers: {
//            'Accept': 'application/json'
//        }
//    })
//    .then(res => res.json())
//    .then(data => {
//        const Quotes = data.Quotes
//        quotePTag.innertext = Quotes
//    })
//}

// function postKanyeQuote(body) {
//     return fetch (URL, {
//         method: 'POST',
//         headers: {
//             'Accept': 'applicaton/json'
//         },
//         body:JSON.stringify(body)
//     })
//     .then(res => res.json())
    






