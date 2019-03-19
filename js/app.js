let player1 = "X";
let player2 = "O";
let fieldsArr = new Array(9);
let activePlayer = player1;
let turn = 1;
let gameOn = true;

const gameHeaderEl = document.querySelector('.game__header h1'); 

const fields = document.querySelectorAll('.game__field');
let fieldsElArr = Array.from(fields);

function newGame() {
    fieldsArr = new Array(9);
    activePlayer = player1;
    turn = 1;
    gameOn = true;
    fieldsElArr.forEach(field => {
        field.innerHTML = "";
        field.classList.remove('winnerBg');
    });
    gameHeaderEl.innerHTML = 'Tic Tac Toe';
}

//handle player's turn
function playFunc(e) {
    //console.log(e);
    if (gameOn && turn <=9) {
        if (e.target.innerText === "") {
            e.target.innerText = activePlayer; //insert X or O into field
            fieldsArr[e.target.dataset.fieldnum] = activePlayer; //put it into array
            //check if someone won
            checkWin();
            activePlayer = activePlayer === player1 ? player2 : player1; //change active player
            document.querySelector('.game__player-X').classList.remove('active');
            document.querySelector('.game__player-O').classList.remove('active');
            document.querySelector(`.game__player-${activePlayer}`).classList.add('active');
            turn++;
        } 
    }
    if (turn > 9) {
        //nobody won
        gameHeaderEl.innerHTML = `Nobody won`;
        gameOn = false;
    }
}

//check if someone won
function checkWin() {
    //check in line
    for (let i = 0; i <= 6; i+=3) {
        if ((fieldsArr[i] === fieldsArr[i+1]) && (fieldsArr[i] === fieldsArr[i+2]) && (fieldsArr[i] === activePlayer)) {
            console.log('Wygrał ' + activePlayer);
            gameHeaderEl.innerHTML = `Player ${activePlayer} won`;
            document.querySelector(`[data-fieldNum="${i}"]`).classList.add('winnerBg');
            document.querySelector(`[data-fieldNum="${i+1}"]`).classList.add('winnerBg');
            document.querySelector(`[data-fieldNum="${i+2}"]`).classList.add('winnerBg');
            gameOn = false;
        }
    }

    //Check across
    for (let i = 0; i < 3; i++) {
        if ((fieldsArr[i] === fieldsArr[i+3]) && (fieldsArr[i] === fieldsArr[i+6]) && (fieldsArr[i] === activePlayer)) {
            console.log('Wygrał ' + activePlayer);
            gameHeaderEl.innerHTML = `Player ${activePlayer} won`;
            document.querySelector(`[data-fieldNum="${i}"]`).classList.add('winnerBg');
            document.querySelector(`[data-fieldNum="${i+3}"]`).classList.add('winnerBg');
            document.querySelector(`[data-fieldNum="${i+6}"]`).classList.add('winnerBg');
            gameOn = false;
        }
    }

    //check diagonal
    if ((fieldsArr[0] === fieldsArr[4]) && (fieldsArr[0] === fieldsArr[8]) && (fieldsArr[0] === activePlayer)) {
        console.log('Wygrał ' + activePlayer);
        gameHeaderEl.innerHTML = `Player ${activePlayer} won`;
        document.querySelector(`[data-fieldNum="${0}"]`).classList.add('winnerBg');
        document.querySelector(`[data-fieldNum="${4}"]`).classList.add('winnerBg');
        document.querySelector(`[data-fieldNum="${8}"]`).classList.add('winnerBg');
        gameOn = false;
    }
    if ((fieldsArr[2] === fieldsArr[4]) && (fieldsArr[2] === fieldsArr[6]) && (fieldsArr[2] === activePlayer)) {
        console.log('Wygrał ' + activePlayer);
        gameHeaderEl.innerHTML = `Player ${activePlayer} won`;
        document.querySelector(`[data-fieldNum="${2}"]`).classList.add('winnerBg');
        document.querySelector(`[data-fieldNum="${4}"]`).classList.add('winnerBg');
        document.querySelector(`[data-fieldNum="${6}"]`).classList.add('winnerBg');
        gameOn = false;
    }
}

//add event listener for every field and listen for a click event
fieldsElArr.forEach(fieldEl => fieldEl.addEventListener('click', playFunc));

//new game button
const btnNew = document.querySelector('.btn--new');
btnNew.addEventListener('click', newGame); 