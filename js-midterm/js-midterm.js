//creation of gameboard 
const gameBoard = document.querySelector('#gameboard');
const infoDisplay = document.querySelector('#info');
const btnRestart = document.querySelector("#restart");
const startCells = [
    "", "", "", "", "", "", "", "", ""
];

let go = "circle";
infoDisplay.textContent = "O goes first";


function createBoard(){
    startCells.forEach((cell,index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('square');
        cellElement.id = index;
        cellElement.addEventListener('click', addGo);
        gameBoard.append(cellElement);
    });
}

createBoard();

function addGo(e){
    const goDisplay = document.createElement('div');
    goDisplay.classList.add(go);
    e.target.append(goDisplay);
    go = go === "circle" ? "cross" : "circle";
    
    if (go ==="circle") {
        infoDisplay.textContent = "Player O's turn";
    } else {
        infoDisplay.textContent = "Player X's turn";
    }
    e.target.removeEventListener("click", addGo);
    checkScore();
}


//who wins 
function checkScore(){
    const allSquares = document.querySelectorAll(".square");
    const winningCombos = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];

    let aDraw = true;

    winningCombos.forEach((combo) => {
        const cells = combo.map((cellIndex) => allSquares[cellIndex]);
    
        if (cells.every((cell) => cell.firstChild?.classList.contains("circle"))) {
          infoDisplay.textContent = "Player O Wins!";
          cells.forEach((cell) => cell.classList.add("win"));
          aDraw = false;
        } else if (
          cells.every((cell) => cell.firstChild?.classList.contains("cross"))
        ) {
          infoDisplay.textContent = "Player X Wins!";
          cells.forEach((cell) => cell.classList.add("win"));
          aDraw = false;
        }
      });

      if(aDraw && [...allSquares].every((square) => square.firstChild !== null))
      infoDisplay.textContent = "Its a draw, Play Again!";
    }

    


//restart button
function restartGame() {
    startCells.forEach((cell, index) => {
      const cellElement = document.getElementById(index.toString());
      cellElement.innerHTML = '';
      cellElement.addEventListener('click', addGo);
    });
    go = 'circle';
    infoDisplay.textContent = 'O goes first';
  }
  
  btnRestart.addEventListener('click', restartGame);

