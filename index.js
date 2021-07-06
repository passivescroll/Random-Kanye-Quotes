console.log('Welcome to Random Kanye Quotes!')
//API

const quotePTag = document.querySelector('#quote-text')
const refreshButton = document.querySelector('#Refresh-button')
const favoriteButton = document.querySelector('#favorite-button')
const favoriteContainer = document.querySelector('#liked-quotes')

let currentQuote = {}

function fetchKanye() {
    return fetch('https://api.kanye.rest')
    .then(resp => resp.json())
    .then(data => {
        currentQuote = data
        const quote = data.quote 
        quotePTag.innerHTML = quote
        })
    }

refreshButton.addEventListener("click", fetchKanye);



//need to create a function that will not display the the Kanye API

//function displayKanye() {
//  return fetch(URL, {
//      headers: {
//          'Accept': 'application/json'
//      }
//  })
//
   
//quotePTag.innerHTML 



//parse into the ??body ??stringify 
   


