// Select color input
const colorPicker = document.getElementById("colorPicker");
// Select size input
const sizePicker = document.getElementById("sizePicker");
// Select canvas
const pixelCanvas = document.getElementById("pixelCanvas");
// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', function(event) {
    // Prevent default action
    event.preventDefault();
    // Store height value
    let n = document.getElementById("inputHeight").value;
    // Store width value
    let m = document.getElementById("inputWidth").value;
    makeGrid(n, m);

});
// Create an N by M grid
function makeGrid(n, m) {
    pixelCanvas.innerHTML = "";
    // Loop over n to create rows
    for (let x = 0; x < n; x++) {
        let row = pixelCanvas.insertRow(x);
        // Loop over m to create cells in each row
        for (let y = 0; y < m; y++) {
            let cell = row.insertCell(y);
            // Creates an event listener with each cell
            cell.addEventListener("click", function(event) {
                // Changes the color of the cell when clicked
                this.style.backgroundColor = colorPicker.value;
            })
        }
    }
};
