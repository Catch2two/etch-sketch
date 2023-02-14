//global variables
let color = 'black';

function createBoard(size) {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    //This will make 16 Columns(andRows) w/ width of 16
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`

    let amount = size * size
    for (let i = 0; i < amount; i++) {
     let square = document.createElement("div");
     square.addEventListener("mousemove", colorSquare);
     square.style.backgroundColor = "grey";
     board.insertAdjacentElement("beforeEnd" , square);
}}

createBoard(16);

function changeSize(input){
  if(input >= 2 && input <= 100) {
    createBoard(input);
} else {
  console.log("Please select a number between 2 and 100.");
 }
}

// Refer to any square we currently calling that function with.
// make sure to add === so it wont always be random color
function colorSquare() {
    if(color === 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
    this.style.backgroundColor = color;
  }
}

function changeColor(choice) {
    color = choice;
}

function resetBoard() {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = 'Gray');
}