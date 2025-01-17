function drawBoard() {

    const grid = document.querySelector("#grid");
    const board = [
        [18, 28, 38, 48, 58, 68, 78, 88],
        [17, 27, 37, 47, 57, 67, 77, 87],
        [16, 26, 36, 46, 56, 66, 76, 86],
        [15, 25, 35, 45, 55, 65, 75, 85],
        [14, 24, 34, 44, 54, 64, 74, 84],
        [13, 23, 33 ,43, 53, 63, 73, 83],
        [12, 22, 32, 42, 52, 62, 72, 82],
        [11, 21, 31, 41, 51, 61, 71, 81]
    ]
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
    
    for(let i = 0; i < board.length; i++) {

        for(let j = 0; j < board.length; j++) {
            const cell = document.createElement("div");                           //tworzenie pól
            cell.classList.add("cell");
            console.log(cell)
            cell.style.height = `${cellSize}px`;
            cell.style.width = `${cellSize}px`;
            cell.dataset.index = board[i][j];
            if(i == 7) {                                                          //wspolrzedne alfabetyczne
                cell.innerHTML = `<pre>&#${ascii};<pre>`;
                ascii++;
            }
            if(board[i][j] < 20) {                                                       //wspolrzedne liczbowe
                cell.style.padding = "5px"
                cell.textContent = verticalCoordsCounter;
                verticalCoordsCounter--;
            }
        
            if(i == 7 && j == 0) {
                cell.textContent = "";                                             //Dodanie i ułożenie wspolrzednej a1
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
        
            if(i == 0 || i == 1 || i == 6 || i == 7) {
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
        
            if(j == 7) {
                grid.appendChild(cell);                                             //rysuje i pozycjonuje szachownice;
            }
            else {
                toggle = !toggle;
                grid.appendChild(cell);
            }
        
            if(i == 0 && j == 0) cell.style.borderRadius = `5px 0 0 0`;
            else if(i == 0 && j == 7) cell.style.borderRadius = `0 5px 0 0`;                  //Zaokragla krawedzie
            else if(i == 7 && j == 0) cell.style.borderRadius = `0 0 0 5px`;
            else if(i == 7 && j == 7) cell.style.borderRadius = `0 0 5px 0`;
        }
        

    }

}



drawBoard();