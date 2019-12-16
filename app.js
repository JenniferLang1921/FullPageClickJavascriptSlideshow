let sliderImages = document.querySelectorAll('.slide'),
arrowLeft = document.querySelector('#arrow-left'),
arrowRight = document.querySelector('#arrow-right'),
pause = document.querySelector('#pause'),
current = 0;


//clear all images
function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';
    }
}

function startSlide() {
    reset();
    sliderImages[0].style.display = 'block';
}


//auto run slideshow
function changeImg(){
   
   
    
    sliderImages[current + 1].style.display = 'block';
    current++; 
    
    
}

//Show previous
function slideLeft(){
    reset ();
    sliderImages[current -1].style.display = 'block';
    current--;
}

//Show next
function slideRight(){
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
    
}

//Left arrow click
arrowLeft.addEventListener('click', function(){
    if (current === 0){
        current = sliderImages.length;
    }

    slideLeft();

})


//Right arrow click
arrowRight.addEventListener('click', function(){
    if (current === sliderImages.length -1){
        current = -1;
    }

    slideRight();
    

})

changeImg();
setTimeout("changeImg()", 2000);
startSlide();