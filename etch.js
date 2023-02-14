function createBoard(size) {
    let board = document.querySelector(".board");
//This will make 16 Columns(andRows) w/ width of 16
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`

    for (let i = 0; i < 256; i++) {
     let square = document.createElement("div");
     square.style.backgroundColor = "blue";
     board.insertAdjacentElement("beforeEnd" , square);
}}

createBoard(16);

function changeSize(input){
    populateBoard(input);
}