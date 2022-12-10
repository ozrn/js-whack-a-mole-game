const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");

function getRandomTime(min, max){
    return Math.round(Math.random() * (max - min) + min);
}

function getRandomHole(holes){
    const index = Math.floor(Math.random() * holes.length);
    const hole = holes[index];
    console.log(hole);
}
  