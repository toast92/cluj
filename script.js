let currentGallery = 0;
let gallery = document.getElementsByClassName('gallery');

function nextGallery(){
    currentGallery ++;
    
    if(currentGallery == gallery.length){
        currentGallery = 0;
    }

    for(let i=0; i<gallery.length; i++ ){
        gallery[i].classList.add("hidden");

        if(i === currentGallery){
            gallery[i].classList.remove('hidden');
        }
    }
}

function previousGallery(){
    currentGallery --;

    if(currentGallery < 0){
        currentGallery = gallery.length-1;
    }

    for(let i=gallery.length-1; i>=0; i-- ){
        gallery[i].classList.add("hidden");
        if(i === currentGallery){
            gallery[i].classList.remove('hidden');
        }
    }
}

let currentPicture = 0;
let slides = document.getElementsByClassName('js-slides');

function slideUp(){
    currentPicture++;
    if(currentPicture == slides.length){
    currentPicture = 0;
}

    for(let i=0; i<slides.length; i++ ){
        slides[i].classList.add("hidden");

        if(i === currentPicture){
            slides[i].classList.remove('hidden');
        }
    }
}
