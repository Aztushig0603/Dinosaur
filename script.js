var character =
document.getElementById("character");
var block = document.getElementById("block");
function jumt(){
    if(character.classlist != "animate"){
    character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate")
    },500);
}

var checkDead = setInterval(function(){
    var charaterTop =
    parseInt(window.getComputedStyle(character).getpropertyValue("top"));
    var blockLeft =
    parseInt(window.getComputedStyle(block).getpropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 && characterTop>=130){
        block.style.animation = "none";
        block.style.display = "none";
        alert("suga ahaha")
    }
},10);