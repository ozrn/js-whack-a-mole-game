const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
let lastHole;
let timeUp = false;
let score = 0;

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

function popUpMoles(){
    const popUpTime = getRandomTime(200, 1000);
    const popUpHole = getRandomHole(holes);
    popUpHole.classList.add("up");
    
    setTimeout(() => {
        popUpHole.classList.remove("up");
        if(!timeUp) popUpMoles();
    }, popUpTime)
}

function startGame(){
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    popUpMoles();
    setTimeout(() => timeUp = true, 10000);
}

function bonk(e){
    if(!e.isTrusted) return; // fake clicking!
    score++;
    this.classList.remove("up");
    scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener("click", bonk));
  