// FILTER

const buttons = document.querySelectorAll(".button");
const items = document.querySelectorAll(".gallery .item");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        items.forEach(item => {

            item.style.transition = "all 0.4s ease";

            if(filter === "*" || item.classList.contains(filter.slice(1))){
                item.style.opacity = "1";
                item.style.transform = "scale(1)";
                item.style.display = "block";
            }
            else{
                item.style.opacity = "0";
                item.style.transform = "scale(0.8)";

                setTimeout(() => {
                    item.style.display = "none";
                }, 300);
            }

        });

    });
});

// LIGHTBOX

const images = document.querySelectorAll(".gallery img");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.getElementById("close");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;

images.forEach((img,index)=>{

    img.addEventListener("click",()=>{

        currentIndex=index;
        lightbox.style.display="flex";
        lightboxImg.src=images[currentIndex].src;

    });

});
// GALLERY
const galleryItems = document.querySelectorAll(".gallery .item");

galleryItems.forEach((item, index) => {

    item.addEventListener("click", (e) => {

        e.preventDefault();

        currentIndex = index;
        lightbox.style.display = "flex";
        lightboxImg.src = images[currentIndex].src;

    });

});
// CLOSE-BUTTON

closeBtn.addEventListener("click",()=>{

    lightbox.style.display="none";

});
//PREV-BUTTON
prevBtn.addEventListener("click",()=>{

    currentIndex--;

    if(currentIndex<0){
        currentIndex=images.length-1;
    }

    lightboxImg.src=images[currentIndex].src;

});
//NEXT-BUTTON

nextBtn.addEventListener("click",()=>{

    currentIndex++;

    if(currentIndex>=images.length){
        currentIndex=0;
    }

    lightboxImg.src=images[currentIndex].src;

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){
        lightbox.style.display="none";
    }

});
document.addEventListener("keydown",(e)=>{

    if(lightbox.style.display==="flex"){

        if(e.key==="ArrowLeft"){
            prevBtn.click();
        }

        if(e.key==="ArrowRight"){
            nextBtn.click();
        }

        if(e.key==="Escape"){
            lightbox.style.display="none";
        }

    }

});