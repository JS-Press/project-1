document.addEventListener("DOMContentLoaded", () => {
allTheStuff()
})


function allTheStuff(){

    
const URL = 'https://api.artic.edu/api/v1/artworks/129884'
const newButton = document.querySelector('#newMatch')
const artwork = document.querySelector('#art')


function getImage(){
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        return`${data.config.iiif_url}`+'/'+`${data.data.image_id}`+'/full/843,/0/default.jpg'
    })
    .then(link => {
        artwork.src = link
        artwork.style.height = document.body.clientHeight/2
        artwork.style.width = 'auto'
    })
   

   
    }





newButton.addEventListener('click', () => {

getImage()

//let newArtLink = 'https://api.artic.edu/api/v1/artworks/' + `${Math.floor(Math.random() * 200000)}`
//artwork.innerHTML = `src=${newArtLink} alt='An Artwork' class="rotate90" id='art'`
    
})



}