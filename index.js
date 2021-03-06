
function startImg(){
const img = document.createElement('img')
img.innerHTML = "alt=\'An Artwork\' class=\"rotate\" id=\'art\'"
}
const newButton = document.querySelector('#newMatch')
// const theDiv = document.querySelector('#theDiv')
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
        places[10]= 'places/17.jpeg'
        places[11]= 'places/Steel Chain Link Framework-GalvOnAll-main-hero.jpeg'
        places[12]= 'places/unnamed.jpeg'
        places[13]= 'places/unnamjhed.jpeg'
        places[14]= 'places/watch-your-eyes-on-the-talented-graffiti-artist-turn-ugly-tedious-walls-into-stunning-3d-works-picture-1.jpeg'
        places[15]= 'places/1.jpeg'
        places[16]= 'places/2.jpeg'
        places[17]= 'places/3.jpeg'
        places[18]= 'places/4.jpeg'
        places[19]= 'places/5.jpeg'
        places[20]= 'places/6.jpeg'
        places[21]= 'places/7.jpeg'
        places[22]= 'places/8.jpeg'
        places[23]= 'places/9.jpeg'
        places[24]= 'places/10.jpeg'
        places[25]= 'places/11.jpeg'
        places[26]= 'places/12.jpeg'
        places[27]= 'places/13.jpeg'
        places[28]= 'places/14.jpeg'
        places[29]= 'places/15.jpeg'
        places[30]= 'places/16.jpeg'
        places[31]= 'places/17.jpeg'
        places[32]= 'places/18.jpeg'
        places[33]= 'places/19.jpeg'
        places[34]= 'places/depositphotos_228737146-stock-photo-street-wall-background-industrial-background.jpeg'
        places[35]= 'places/20.jpeg'
        places[36]= 'places/21.jpeg'
        places[37]= 'places/22.jpeg'
        places[38]= 'places/23.jpeg'
        places[39]= 'places/24.jpeg'
        places[40]= 'places/25.jpeg'
        places[41]= 'places/26.jpeg'
        places[42]= 'places/27.jpeg'
        places[43]= 'places/28.jpeg'
        places[44]= 'places/29.jpeg'
        places[45]= 'places/30.jpeg'
        places[46]= 'places/31.jpeg'
        places[47]= 'places/32.jpeg'
        places[48]= 'places/33.jpeg'
        places[49]= 'places/34.jpeg'
        places[50]= 'places/35.jpeg'
        places[51]= 'places/36.jpeg'
        places[52]= 'places/37.jpeg'
        places[53]= 'places/38.jpeg'
        places[54]= 'places/39.jpeg'
        places[55]= 'places/40.jpeg'
        places[56]= 'places/41.jpeg'
        places[57]= 'places/42.jpeg'
        places[58]= 'places/43.jpeg'
        places[59]= 'places/44.jpeg'
        places[60]= 'places/45.jpeg'
        places[61]= 'places/46.jpeg'
        places[62]= 'places/47.jpeg'
        places[63]= 'places/48.jpeg'
        places[64]= 'places/49.jpeg'
        places[65]= 'places/50.jpeg'
        places[66]= 'places/51.jpeg'
        places[67]= 'places/52.jpeg'
        places[68]= 'places/53.jpeg'
        places[69]= 'places/54.jpeg'
        places[70]= 'places/55.jpeg'
        places[71]= 'places/56.jpeg'
        places[72]= 'places/57.jpeg'
        places[73]= 'places/58.jpeg'
        places[74]= 'places/59.jpeg'
        places[75]= 'places/60.jpeg'
        places[76]= 'places/61.jpeg'
        places[77]= 'places/62.jpeg'
        places[78]= 'places/63.jpeg'
        places[79]= 'places/64.jpeg'
        places[80]= 'places/65.jpeg'
        places[81]= 'places/joke.jpeg'



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

//console.log("'" + `${places[Math.floor(Math.random() * 15)]}` + "'")


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
        // let h = artwork.style.height
        // let w = artwork.style.width

        artwork.style.display = "block"
        artwork.setAttribute("class", "center")
        
        document.body.style.backgroundImage = `url(\"${places[Math.floor(Math.random() * 81)]}\")`
       
        // theDiv.style.width = h
        // theDiv.style.height = w
        // theDiv.style.display = "block"
        // theDiv.setAttribute("class", "center")

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

artwork.addEventListener("click", () => {
getImage()  
})

newButton.addEventListener('click', () => {
getImage()
})

getImage()

}



// const grandJatte = 'https://www.artic.edu/iiif/2/1adf2696-8489-499b-cad2-821d7fde4b33/full/843,/0/default.jpg'