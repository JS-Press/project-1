document.addEventListener("DOMContentLoaded", () => {
allTheStuff()
})

function allTheStuff(){

console.log('starting!')

const URL = 'https://api.artic.edu/api/v1/artworks/129884'

fetch (URL)
.then ( response => response.json())
.then ( data => console.log(data))

}