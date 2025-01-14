const grid = document.querySelector("#grid");
const images = [
    'images/rookBlack.svg',
    'images/knightBlack.svg',
    'images/bishopBlack.svg',
    'images/queenBlack.svg',
    'images/kingBlack.svg',
    'images/bishopBlack.svg',
    'images/knightBlack.svg',
    'images/rookBlack.svg',
    'images/pawnBlack.svg',
    'images/pawnBlack.svg',
    'images/pawnBlack.svg',
    'images/pawnBlack.svg',
    'images/pawnBlack.svg',
    'images/pawnBlack.svg',
    'images/pawnBlack.svg',
    'images/pawnBlack.svg',

    'images/pawnWhite.svg',
    'images/pawnWhite.svg',
    'images/pawnWhite.svg',
    'images/pawnWhite.svg',
    'images/pawnWhite.svg',
    'images/pawnWhite.svg',
    'images/pawnWhite.svg',
    'images/pawnWhite.svg',
    'images/rookWhite.svg',
    'images/knightWhite.svg',
    'images/bishopWhite.svg',
    'images/kingWhite.svg',
    'images/queenWhite.svg',
    'images/bishopWhite.svg',
    'images/knightWhite.svg',
    'images/rookWhite.svg',
]

let cellSize = 95;
let cellNumber = 64;
let toggle = true;
let ascii = 97;
let counter = 8;
let imageCounter = 0;

for(let i = 0; i < 64; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.height = `${cellSize}px`;
    cell.style.width = `${cellSize}px`;
    // if(i >= 56) {
    //     cell.innerHTML = `<pre>&#${ascii};<pre>`;
    //     cell.style.padding = `50px 0 0px 75px`;
    //     ascii++;
    // }
    // if(i % 8 == 0) {
    //     cell.style.padding = "5px"
    //     cell.textContent = counter;
    //     counter--;
    // }
    // if( i == 56) {
    //     cell.textContent = "";
    //     const charOne = document.createElement("div");
    //     const charTwo = document.createElement("div");
    //     charOne.style.zIndex = 1;
    //     charTwo.style.zIndex = 1;
    //     charOne.style.position = 'relative';
    //     charTwo.style.position = 'relative';
    //     charOne.textContent = 1;
    //     charTwo.textContent = "a";
    //     cell.appendChild(charOne);
    //     cell.appendChild(charTwo);
    //     cell.style.display = "flex";
    //     cell.style.padding = `5px`;
    //     cell.style.gap = "60px";
    //     charTwo.style.marginTop = "65px"

    // }
    if(toggle) {
        cell.style.backgroundColor = "#F0FFFF"; 
        cell.style.color = "#87CEEB"; 
    }
    else {
        cell.style.backgroundColor = "#87CEEB";
        cell.style.color = "#F0FFFF"; 
    }

    cell.style.fontSize = "20px";
    if(i == 0) cell.style.borderRadius = `5px 0 0 0`;
    else if(i == 7) cell.style.borderRadius = `0 5px 0 0`;
    else if(i == 56) cell.style.borderRadius = `0 0 0 5px`;
    else if(i == 63) cell.style.borderRadius = `0 0 5px 0`;

    if( (i >= 0 && i <= 15) || (i >= 48 && i <= 63) ) {
        const img = document.createElement('img');
        img.src = images[imageCounter];
        imageCounter++;

        img.style.height = '90px';
        img.style.width = '90px';
        cell.appendChild(img);
    }

    if(i == 7 || i == 15 || i == 23 || i == 31 || i == 39 || i == 47 || i == 55) {
        grid.appendChild(cell);
        continue;
    }
    toggle = !toggle;
    grid.appendChild(cell);
}