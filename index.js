
//eventListener
//click
$(".box").click(function(){
   var alphabet= this.innerText;
   sound(alphabet);
   activeButton(alphabet);
   
});
//keypress
document.addEventListener("keypress", function(event){
    sound(event.key);
    activeButton(event.key);
});

//audio function
function sound(q){
    switch(q){
        case "a": 
        var audio = new Audio('sounds/bass drum.mp3');
        audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/floor tom.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/High tom.wav');
            audio.play();
            break;
        case "f":
            var audio = new Audio('sounds/snare drum.mp3');
            audio.play();
            break; 
        case "j":
           var audio = new Audio('sounds/mid tom.wav');
           audio.play();
           break; 
        case "k":
           var audio = new Audio('sounds/china crash cymbal.mp3');
           audio.play();
           break; 
        case "l":
           var audio = new Audio('sounds/hi hat.mp3');
           audio.play();
           break; 
        case "p":
                var audio = new Audio('sounds/drum stick.mp3');
                audio.play();
                break;                       
        default://do nothing; 

    }
}
//shadow
function activeButton(r){
    var active= document.querySelector("."+r);
    active.classList.add("click");

    setTimeout(function(){
        active.classList.remove("click");
    },200);
}
