let currentGallery = 1;
let galleries = document.getElementsByClassName('gallery');
let galleriesObject = {};

function fillGalleriesObject(){
    Array.from(galleries).forEach((gallery) => {
        galleriesObject[gallery.dataset.id] = {
            id: parseInt(gallery.dataset.id, 10),
            element: gallery,
            currentSlide: 0,
            slides: gallery.getElementsByClassName('js-slides'),         
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
    const slides = galleriesObject[currentGallery].slides;

    galleriesObject[currentGallery].currentSlide++;
    
    if(galleriesObject[currentGallery].currentSlide === slides.length){
        galleriesObject[currentGallery].currentSlide = 0;
    }

    showCurrentSlide(slides);
}

function previousSlide(){
    const slides = galleriesObject[currentGallery].slides;

    galleriesObject[currentGallery].currentSlide--;
    
    if(galleriesObject[currentGallery].currentSlide < 0){
        galleriesObject[currentGallery].currentSlide = slides.length-1;
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

function showLightBox(){
let thumbnail = document.querySelectorAll('.thumbnail');

    for(let i=0; i<thumbnail.length; i++){
        thumbnail[i].addEventListener('click', function(){
            let photos = document.querySelector('.photos');
            photos.classList.remove('hidden');
        });
    }
}

showLightBox();