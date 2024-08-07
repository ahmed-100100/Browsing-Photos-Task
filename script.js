var images = Array.from(document.querySelectorAll(".myCard > img"));
var layOut = document.querySelector(".layOut");
var imgLayOut = document.querySelector(".imgLayOut img");
var iconLeft = document.querySelector(".iconLeft");
var iconX = document.querySelector(".iconX");
var iconRight = document.querySelector(".iconRight");
var currentIndex = 0;
for(var i=0 ; i<images.length ; i++){
    images[i].addEventListener("click" , function(e){
        layOut.classList.replace("d-none" , "d-flex");
        imgLayOut.src = e.target.src;
        currentIndex = images.indexOf(e.target);
    });
}
iconX.addEventListener("click",function(){
    layOut.classList.replace("d-flex" , "d-none");
});
iconRight.addEventListener("click",function(){
    nextImage();
});
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    imgLayOut.src = images[currentIndex].src;
}
iconLeft.addEventListener("click",function(){
    previousImage();
});
function previousImage(){
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    imgLayOut.src = images[currentIndex].src;
}
document.addEventListener("keydown",function(e){
    if(e.code=="ArrowRight"){
        nextImage();
    }
    else if(e.code=="ArrowLeft"){
        previousImage();
    }
    else if(e.code=="Escape"){
        layOut.classList.replace("d-flex" , "d-none");
    }
});
layOut.addEventListener("click", function(e) {
    if (!document.querySelector(".imgLayOut").contains(e.target)) {
        layOut.classList.replace("d-flex", "d-none");
    }
});