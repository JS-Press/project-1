document.addEventListener("DOMContentLoaded", () => {
allTheStuff()
})


// start with fetch!
//
// let theArtwork = document.createElement('IMG')
// theArtwork.src = getImageLink()
//

function allTheStuff(){

    
//const URL = 'https://api.artic.edu/api/v1/artworks/129884'
//let URL = `https://api.artic.edu/api/v1/artworks/${Math.floor(Math.random() * 200000)}`
const newButton = document.querySelector('#newMatch')
const artwork = document.querySelector('#art')

// function getFirstImage(){
// getImage()
// }
// getFirstImage()

function getImage(){
    let URL = `https://api.artic.edu/api/v1/artworks/${Math.floor(Math.random() * 200000)}`
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        return`${data.config.iiif_url}`+'/'+`${data.data.image_id}`+'/full/843,/0/default.jpg'
    })
    .then(link => {
        artwork.src = link
        artwork.style.height = document.body.clientHeight/2
        artwork.style.width = 'auto'
        //document.body.style.backgroundImage = "";
    })
    .else( function(){
    
        artwork.src = 'https://publicdelivery.org/wp-content/uploads/2019/09/Rene%CC%81-Magritte-%E2%80%93-The-Treachery-of-Images-This-is-Not-a-Pipe-1929--scaled.jpg'
        }
   
    )}


    function getImageLink(){
        let URL = `https://api.artic.edu/api/v1/artworks/${Math.floor(Math.random() * 200000)}`
        fetch(URL)
        .then(response => response.json())
        .then(data => {
            return`${data.config.iiif_url}`+'/'+`${data.data.image_id}`+'/full/843,/0/default.jpg'
        })
    }


newButton.addEventListener('click', () => {

getImage()

//let newArtLink = 'https://api.artic.edu/api/v1/artworks/' + `${Math.floor(Math.random() * 200000)}`
//artwork.innerHTML = `src=${newArtLink} alt='An Artwork' class="rotate90" id='art'`
    
})



}