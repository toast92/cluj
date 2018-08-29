let currentGallery = 1;
let galleries = document.getElementsByClassName('gallery');
let galleriesObject = {};

function fillGalleriesObject(){
    Array.from(galleries).forEach((gallery) => {
        galleriesObject[gallery.dataset.id] = {
            id: parseInt(gallery.dataset.id, 10),
            element: gallery,
            currentSlide: 0,
            
        }
    });
}

fillGalleriesObject();

function nextGallery(){
    currentGallery ++;
    
    if(currentGallery > galleries.length){
        currentGallery = 1;
    }

    showCurrentGallery();
}

function previousGallery(){
    currentGallery --;

    if(currentGallery < 1){
        currentGallery = galleries.length;
    }

    showCurrentGallery();
}

function showCurrentGallery(){
    Object.values(galleriesObject).forEach((gallerie) => {
        gallerie.element.classList.add("hidden");

        if(gallerie.id === currentGallery){
            gallerie.element.classList.remove('hidden');
        }
    });
}

function nextSlide(){
    let slides = galleriesObject[currentGallery].element.getElementsByClassName('js-slides');

    galleriesObject[currentGallery].currentSlide++;
    
    if(galleriesObject[currentGallery].currentSlide === slides.length){
        galleriesObject[currentGallery].currentSlide = 0;
    }

    showCurrentSlide(slides);
}

function showCurrentSlide(slides){
    for(let i=0; i<slides.length; i++ ){
        slides[i].classList.add("hidden");

        if(i === galleriesObject[currentGallery].currentSlide){
            slides[i].classList.remove('hidden');
        }
    }
}