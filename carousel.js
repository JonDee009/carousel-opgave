const CAROUSEL_IMG = document.querySelector(".carousel__image")
const CAROUSEL_FORWARD = document.querySelector(".carousel__forwardButton")
const CAROUSEL_BACK = document.querySelector (".carousel__backButton") 
const IMAGES = ["https://placekitten.com/400", "https://picsum.photos/400/400", "https://picsum.photos/400", "https://picsum.photos/400/400", "https://placekitten.com/400/400"] 
const IMAGE_TEXT = ['text for image 1', 'text for image 2', 'text for image 3', 'text for image 4', 'text for image 5'] 

var index = 0
CAROUSEL_IMG.src = IMAGES[index]

CAROUSEL_FORWARD.addEventListener("click", shuffleForward)
CAROUSEL_BACK.addEventListener("click", shuffleBack)  


function shuffleForward(event) {
    index++
    if (IMAGES.length === index) {
        index = 0
    }
    
    
    CAROUSEL_IMG.src = IMAGES[index]
}

function shuffleBack(event) {
    index--
    if (index < 0) {
        index = IMAGES.length - 1
    }

    CAROUSEL_IMG.src = IMAGES [index]
}

IMAGES.forEach(function (){
    const button = document.createElement("button")
    button.classList.add("pagination__button");
    button.addEventListener("click", shuffleBack, shuffleForward)
    button.dataset.index = 
    document.querySelector(".pagination").append(button)
})








