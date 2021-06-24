//variables

const rock = document.querySelector('.rock');
const scissors = document.querySelector('.scissors');
const paper = document.querySelector('.paper');
const man = document.querySelector('.tak-man');
const pc = document.querySelector('.tak-pc');
const pcBattle = document.querySelector('.tak-img-battle-pc');
const manBattle = document.querySelector('.tak-img-battle-man');
const startBtn = document.querySelector('.tak-start-game-btn');
let num;
let pcScore = 0;
let manScore = 0;
let src = ["images/rock.png", "images/paper.png", "images/scissors.png"];
let arrayNumKeyPc = 0;
let arrayNumKeyMan = 1;
let interval;
let enable = false;

//event listeners

eventListeners();

function eventListeners() {
    startBtn.addEventListener('click', startBtnFunction);
}

function startBtnFunction() {
    if (enable === false) {
        enable = true;
        rock.addEventListener('click', function taha() {
            Survey(1);
        });
        paper.addEventListener('click', function taha() {
            Survey(2)
        });
        scissors.addEventListener('click', function taha() {
            Survey(3)
        });
        interval = setInterval(setInter, 200);
    }
}

function createRandomNumber() {
    num = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
}

function Survey(x) {
    if (enable) {
        enable = false;
        createRandomNumber();
        if (x === num) {
            manScore += 0;
            pcScore += 0;
        } else if (x === 1 && num === 2 || x === 2 && num === 3 || x === 3 && num === 1) {
            pcScore += 1;
            pc.innerHTML = pcScore;
        } else if (x === 1 && num === 3 || x === 2 && num === 1 || x === 3 && num === 2) {
            manScore += 1;
            man.innerHTML = manScore;
        }
        clearInterval(interval);
        pcBattle.src = src[num - 1];
        manBattle.src = src[x - 1];
    }
}


//****************************************************************

function setInter() {

    pcBattle.src = src[arrayNumKeyPc];
    if (arrayNumKeyPc === 2) {
        arrayNumKeyPc = 0;
    } else {
        arrayNumKeyPc++;
    }

    manBattle.src = src[arrayNumKeyMan];
    if (arrayNumKeyMan === 2) {
        arrayNumKeyMan = 0;
    } else {
        arrayNumKeyMan++;
    }

}

//****************************************************************
