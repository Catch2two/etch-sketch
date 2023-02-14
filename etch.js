/* link to div id 'container' */
const container = document.getElementById('container');
const resetButton = document.querySelector("resetButton");

/* create rows and columns function*/
function makeRows (rows, columns) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-columns', columns);

 /* set limit of grid to number of rows * number of columns*/ 
    for (i = 0; i <(rows * columns); i++) {
        /* Create a new div element with text inside */
        let cell  = document.createElement('div');
        cell.innerText = (i + 1);
        /* visually add makeRows to the page*/
        container.appendChild(cell).className = "grid-item";
        //console.log(makeRows);
        
};



}
makeRows(16, 16)
