const grid = document.querySelector("#grid");
let cellSize = 95;
let cellNumber = 64;
let toggle = true;
let ascii = 97;
let counter = 8;

for(let i = 0; i < 64; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.height = `${cellSize}px`;
    cell.style.width = `${cellSize}px`;
    if(i >= 56) {
        cell.innerHTML = `<pre>&#${ascii};<pre>`;
        cell.style.padding = `50px 0 0px 75px`;
        ascii++;
    }
    if(i % 8 == 0) {
        cell.style.padding = "5px"
        cell.textContent = counter;
        counter--;
    }
    if( i == 56) {
        cell.textContent = "";
        const charOne = document.createElement("div");
        const charTwo = document.createElement("div");
        charOne.textContent = 1;
        charTwo.textContent = "a";
        cell.appendChild(charOne);
        cell.appendChild(charTwo);
        cell.style.display = "flex";
        // cell.style.flexDirection = "column";
        // cell.style.alignItems = "center"
        // cell.style.justifyContent = "space-between"
        cell.style.padding = `5px`;
        cell.style.gap = "60px";
        charTwo.style.marginTop = "65px"

    }
    if(toggle) {
        cell.style.backgroundColor = "#F0FFFF"; 
        cell.style.color = "#87CEEB"; 
    }
    else {
        cell.style.backgroundColor = "#87CEEB";
        cell.style.color = "#F0FFFF"; 
    }
    // cell.style.padding = "10px"
    cell.style.fontSize = "20px";
    if(i == 0) cell.style.borderRadius = `5px 0 0 0`;
    else if(i == 7) cell.style.borderRadius = `0 5px 0 0`;
    else if(i == 56) cell.style.borderRadius = `0 0 0 5px`;
    else if(i == 63) cell.style.borderRadius = `0 0 5px 0`;

    if(i == 7 || i == 15 || i == 23 || i == 31 || i == 39 || i == 47 || i == 55) {
        grid.appendChild(cell);
        continue;
    }
    toggle = !toggle;
    grid.appendChild(cell);
}