alert("You are welcome");

document.querySelectorAll(".nav-bar a")[1].addEventListener("click", waiting);
                                                            
function waiting(){
    alert("Don't worry you will have different categories of songs to choose from. The Site is undergoing some maintanance. But you can click on Cardi B's picture to listen to one great music");
};

document.querySelectorAll(".image-container img")[1].addEventListener("click", boomboom);

function boomboom(){
    var audio = new Audio("sounds/cardi-b-up.mp3");
    audio.play();
}