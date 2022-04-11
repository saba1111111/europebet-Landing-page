   // first slider 
   var left = 1;
    var right = 3;

   var help = 1; 
function show() {
    for(var i = left; i <= right; i++){
        document.getElementById("c"+i).style.display="inline-block";
    }
   
    for(var s = secondLeft; s <= secondRight; s++){
        document.getElementById("b"+s).style.display="inline-block";
    }

}

function moveLeft() {
    if(right == 5) {
        for(var z = left; z <= right; z++) {
        document.getElementById("c"+z).style.display="none";
        }
        left = 1;
        right = 3;
        for(var s = left; s <= right; s++){
            document.getElementById("c"+s).style.display="inline-block";
        }
    }else{
        document.getElementById("c"+left).style.display="none";
        left++;
        right++;
        for(var i = left; i <= right; i++){
            document.getElementById("c"+i).style.display="inline-block";
        }
    }
   
}


//second slider
var secondLeft = 7;
var secondRight = 10;
function leftStep() {
    if(secondRight <= 15 && secondLeft >= 1) {
        document.getElementById("b"+secondLeft).style.display="none";
        secondLeft++;
        secondRight++;
        for(var i = secondLeft; i <= secondRight; i++){
            document.getElementById("b"+i).style.display="inline-block";
        }
    }else {
        return;
    }
}

function rightStep() {
    if(secondRight <= 17 && secondLeft > 1) {
    document.getElementById("b"+secondRight).style.display="none";
    secondLeft--;
    secondRight--;
    for(var i = secondLeft; i <= secondRight; i++){
        document.getElementById("b"+i).style.display="inline-block";
    }
}
}
// accordion principe
const accordionitemheader = document.querySelectorAll(".accordion-item-header");
var teste = false;
accordionitemheader.forEach(accordionitemheader => {
    accordionitemheader.addEventListener("click",event => {
        accordionitemheader.classList.toggle("active");
    });
});