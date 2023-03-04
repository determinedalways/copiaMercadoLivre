const arrowPrev = document.querySelector('.arrow-prev');
const arrowNext = document.querySelector('.arrow-next');
const item1 = document.querySelector('.item-1')
const item2 = document.querySelector('.item-2')
const item3 = document.querySelector('.item-3')

let currentImage = 1


function next(){
    if(currentImage == 1){
        item1.style.opacity=0
        item2.style.opacity=1
        currentImage=2
        return;
    }
    if(currentImage ==2){
        item2.style.opacity = 0
        item3.style.opacity = 1
        currentImage = 3;
        return
    }
    if(currentImage == 3) {
        item3.style.opacity = 0
        item1.style.opacity = 1;
        currentImage = 1;
        return
    }
}

function back() {
    if(currentImage == 1) { 
        item1.style.opacity = 0
        item3.style.opacity = 1
        currentImage = 3
        return
    }
    if(currentImage == 3) {
        item3.style.opacity = 0
        item2.style.opacity = 1
        currentImage = 2
        return
    }

    if(currentImage == 2) {
        item2.style.opacity = 0
        item1.style.opacity = 1
        currentImage = 1
        return
    }
}
 


// function seta() {
//     if(item1.style.opacity == 1 ) {
//         alert('oi')
//         item1.style.opacity = 0
//         item2.style.opacity = 1
//         item3.style.opacity = 1
//     }
// }
