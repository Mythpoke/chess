const grid = document.querySelector("#grid");
let cellSize = 90;
let cellNumber = 64;


for(let i = 0; i < 64; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.height = `${cellSize}px`;
    cell.style.width = `${cellSize}px`;
    grid.appendChild(cell);
}