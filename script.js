const box = document.getElementById("modal-box");
const heart = document.getElementsByClassName("heart");
function openMessage(){
    box.style.display = "block";
    heart.style.bottom = "-5";
}
function closeBtn(){
    box.style.display = "none";
}

