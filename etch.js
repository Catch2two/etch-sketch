function createBoard(size) {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    //This will make 16 Columns(andRows) w/ width of 16
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`

    let amount = size * size
    for (let i = 0; i < amount; i++) {
     let square = document.createElement("div");
     square.addEventListener("mousemove", () => {
        square.style.backgroundColor = "black"
    });
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
