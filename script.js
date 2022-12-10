const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
let lastHole;

function getRandomTime(min, max){
    return Math.round(Math.random() * (max - min) + min);
}

function getRandomHole(holes){
    const index = Math.floor(Math.random() * holes.length);
    const hole = holes[index];
    if(hole === lastHole){
        return getRandomHole(holes);
    }

    lastHole = hole;
    return hole;
}
  