let currentPicture = 0;
let slides = document.getElementsByClassName('slide');

function nextSlide(){
    currentPicture ++;
    
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

function previousSlide(){
    currentPicture --;

    if(currentPicture < 0){
        currentPicture = slides.length-1;
    }

    for(let i=slides.length-1; i>=0; i-- ){
        slides[i].classList.add("hidden");
        if(i === currentPicture){
            slides[i].classList.remove('hidden');
        }
    }
}
