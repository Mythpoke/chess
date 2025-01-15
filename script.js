function drawBoard() {

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
    let verticalCoordsCounter = 8;
    let piecesCounter = 0;
    
    for(let i = 0; i < cellNumber; i++) {
        const cell = document.createElement("div");                           //tworzenie pól
        cell.classList.add("cell");
        cell.style.height = `${cellSize}px`;
        cell.style.width = `${cellSize}px`;
        
        cell.setAttribute('data-index', i);

        if(i >= 56) {                                                          //wspolrzedne alfabetyczne
            cell.innerHTML = `<pre>&#${ascii};<pre>`;
            ascii++;
        }
        if(i % 8 == 0) {                                                       //wspolrzedne liczbowe
            cell.style.padding = "5px"
            cell.textContent = verticalCoordsCounter;
            verticalCoordsCounter--;
        }
    
        if( i == 56) {
            cell.textContent = "";                                             //Dodanie i ułożenie współrzędnych a1
            const numberOne = document.createElement("div");
            const charA = document.createElement("div");
            numberOne.classList.add("char");
            charA.classList.add("char");
    
            numberOne.style.position = 'absolute';
            charA.style.position = 'absolute';
            numberOne.textContent = 1;
            charA.textContent = "a";
            cell.appendChild(numberOne);
            cell.appendChild(charA);
    
            charA.style.marginTop = "65px"                          
            charA.style.marginLeft = "75px"
        }
    
        if( (i >= 0 && i <= 15) || (i >= 48 && i <= 63) ) {
            const img = document.createElement('img');
            img.src = images[piecesCounter];                                     //wgrywa zdjecia figur szachowych
            piecesCounter++;
    
            img.style.height = '90px';
            img.style.width = '90px';
            cell.appendChild(img);
        }
    
        if(toggle) {                                                            //koloruje szachownice
            cell.style.backgroundColor = "#F0FFFF"; 
            cell.style.color = "#87CEEB"; 
        }  
        else {
            cell.style.backgroundColor = "#87CEEB";
            cell.style.color = "#F0FFFF"; 
        }
    
        if( i == 7 || i == 15 || i == 23 || i == 31 || i == 39 || i == 47 || i == 55 || i == 63) {
            grid.appendChild(cell);                                             //pozycjonuje szachownice;
        }
        else {
            toggle = !toggle;
            grid.appendChild(cell);
        }
    
        if(i == 0) cell.style.borderRadius = `5px 0 0 0`;
        else if(i == 7) cell.style.borderRadius = `0 5px 0 0`;                  //Zaakragla krawedzie
        else if(i == 56) cell.style.borderRadius = `0 0 0 5px`;
        else if(i == 63) cell.style.borderRadius = `0 0 5px 0`;
    }
}
drawBoard();





//stworzyc wspolrzedne, ktore beda sie zmienialy w zaleznosci od pozycji figury 