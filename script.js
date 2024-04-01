//image slider

const headshots = document.querySelectorAll(".headshots img");//
let slideIndex = 0;
let intervalid = null;

//initializesSlider();
document.addEventListener("DOMContentLoaded",initializesSlider);


 function initializesSlider(){

    if (headshots.length>0){
        headshots[slideIndex].classList.add("displaySlide");
        intervalid = setInterval(nextSlide,5000);
    }
 
 }
 function showSlide(index){
if(index>=headshots.length){
    slideIndex = 0;
}
   else if(index< 0){
    slideIndex = headshots.length - 1;
   }

   headshots.forEach(slide => {
    slide.classList.remove("displaySlide")
   })

   headshots[slideIndex].classList.add("displaySlide")
 }
 function prevSlide(){
    clearInterval(intervalid);
          slideIndex--;
          showSlide(slideIndex);
 }
 function nextSlide(){
        slideIndex++;
        showSlide(slideIndex)
 }