
function startImg(){
const img = document.createElement('img')
img.innerHTML = "alt=\'An Artwork\' class=\"rotate\" id=\'art\'"
}
const newButton = document.querySelector('#newMatch')
const artwork = document.querySelector('#art')
const places = []
        places[0]= 'places/8dff4155f79cef7c4066a92f45c1f910.jpeg'
        places[1]= 'places/512117.jpeg'
        places[2]= 'places/1449011.jpeg'
        places[3]= 'places/Annika_Elbracht_during_1_tagged.png'
        places[4]= 'places/barn-wall-2.jpeg'
        places[5]= 'places/dsc01142.jpeg'
        places[6]= 'places/Finished-Warehouse-Wall.jpeg'
        places[7]= 'places/Granny2520helps.jpeg'
        places[8]= 'places/IMG_20180428_092758-scaled.jpeg'
        places[9]= 'places/old_warehouse_interior.jpeg'
        places[10]= 'places/on-warehouse-wall.jpeg'
        places[11]= 'places/Steel Chain Link Framework-GalvOnAll-main-hero.jpeg'
        places[12]= 'places/unnamed.jpeg'
        places[13]= 'places/unnamjhed.jpeg'
        places[14]= 'places/watch-your-eyes-on-the-talented-graffiti-artist-turn-ugly-tedious-walls-into-stunning-3d-works-picture-1.jpeg'




document.addEventListener("DOMContentLoaded", () => {
startImg()
allTheStuff()


//console.log("'" + `${places[Math.floor(Math.random() * 15)]}` + "'")

})


// start with fetch!
//
// let theArtwork = document.createElement('IMG')
// theArtwork.src = getImageLink()
//

function allTheStuff(){

    
//const URL = 'https://api.artic.edu/api/v1/artworks/129884'
//let URL = `https://api.artic.edu/api/v1/artworks/${Math.floor(Math.random() * 200000)}`

console.log("'" + `${places[Math.floor(Math.random() * 15)]}` + "'")


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
        artwork.style.display = "block"
        artwork.setAttribute("class", "center")
        
        document.body.style.backgroundImage = `url(\"${places[Math.floor(Math.random() * 15)]}\")`
       
        })
        .catch( function(){
        //alert('sorry try again')
        getImage()
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

getImage()

}



// const grandJatte = 'https://www.artic.edu/iiif/2/1adf2696-8489-499b-cad2-821d7fde4b33/full/843,/0/default.jpg'