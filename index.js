console.log('Welcome to Random Kanye Quotes!')


const quotePTag = document.querySelector("#quote-text")
const refreshButton = document.querySelector("#Refresh-button")
const favoriteButton = document.querySelector("#favorite-button")
const favoriteContainer = document.querySelector("#myFavorites")

let currentQuote = {}
const favoriteQuote = []


function fetchKanye() {
    return fetch('https://api.kanye.rest')
    .then(resp => resp.json())
    .then(data => {
        currentQuote = data
        const quote = data.quote 
        quotePTag.innerHTML = quote
        })
    }


function saveQuote() {
    if(!favoriteQuote.includes(currentQuote)) {
        favoriteQuote.push(currentQuote)
        const li = document.createElement('li')
        li.innerHTML = currentQuote.quote
        favoriteContainer.append(li)
        li.addEventListener('click', event => removequote(event))
    }else {
        alert('You already have that one')
    }
    function removequote(event) {
        event.target.remove()
    }
}   

refreshButton.addEventListener("click", fetchKanye);
      
favoriteButton.addEventListener("click", saveQuote);




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
   


