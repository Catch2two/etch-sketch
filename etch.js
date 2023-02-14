//global variables
let color = 'black';
let click = true;


//Create the Board (grids)
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

//The input element for the size of the board (2-100 only)
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
   if (click) { 
    if(color === 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
    this.style.backgroundColor = color;
  }
}}
//Change color based on the choice of Button selected
function changeColor(choice) {
    color = choice;
}
// Clear the Board
function resetBoard() {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = 'Gray');
}
//if click is true, set it to false. If click is false, set it to true
//If clicking a button, it won't activate the Click to draw event
document.querySelector('body').addEventListener("click", (e) => {
    if(e.target.tagName != 'BUTTON'){
        click = !click;
    if (click) {
        document.querySelector('.mode').textContent = 'Mode: Coloring'
  } else
        document.querySelector('.mode').textContent = 'Mode: Not Coloring'
    }
});