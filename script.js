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
    let toggle = true;
    let ascii = 97;
    let verticalCoordsCounter = 8;
    let piecesCounter = 0;
    
    for(let i = 0; i < board.length; i++) {

        for(let j = 0; j < board.length; j++) {
            const cell = document.createElement("div");                           //tworzenie pól
            cell.classList.add("cell");
            cell.style.height = `${cellSize}px`;
            cell.style.width = `${cellSize}px`;
            cell.dataset.index = board[i][j];

            cell.addEventListener('drop', (e)=> {
                e.preventDefault();
                const data = e.dataTransfer.getData('text/plain');
                cell.textContent = data;
            })
            if(i == 7) {                                                          //wspolrzedne alfabetyczne
                cell.innerHTML = `<pre>&#${ascii};<pre>`;
                ascii++;
            }
            if(j == 0) {                                                       //wspolrzedne liczbowe
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
                img.dataset.index = board[i][j];
                img.id = 'chess-piece' + piecesCounter;
                img.draggable = 'true';

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
            
            cell.style.borderRadius = i == 0 && j == 0 ? `5px 0 0 0`:
             i == 0 && j == 7 ? `0 5px 0 0`:
              i == 7 && j == 0 ? `0 0 0 5px`:                                        //Zaokragla krawedzie
               i == 7 && j == 7 ? `0 0 5px 0`: false;
        }
        

    }
    const handleDragStart = (e) => {
        if (e.target.tagName === 'IMG') {
          e.dataTransfer.setData('text', e.target.id); // Przechowujemy id obrazka
        }
      };
      
      const handleDragOver = (e) => {
        if (e.target.classList.contains('cell')) {
          e.preventDefault(); // Umożliwiamy zrzucenie
          e.target.classList.add('hover');
        }
      };
      
      const handleDragLeave = (e) => {
        if (e.target.classList.contains('cell')) {
          e.target.classList.remove('hover');
        }
      };
      
      const handleDrop = (e) => {
        if (e.target.classList.contains('cell')) {
          e.preventDefault(); // Zapobiegamy domyślnym działaniom
          const imgId = e.dataTransfer.getData('text'); // Pobieramy id przeciąganego obrazka
          const draggedImg = document.getElementById(imgId);
      
          if (draggedImg) {
            // Dodajemy placeholder do poprzedniego rodzica
            const prevParent = draggedImg.parentElement;
            if (prevParent && prevParent.classList.contains('cell')) {
              prevParent.innerHTML = '<span class="placeholder"></span>';
            }
      
            // Usuwamy placeholder z bieżącej komórki
            e.target.innerHTML = '';
      
            // Dodajemy obrazek do nowej komórki
            e.target.appendChild(draggedImg);
          }
      
          e.target.classList.remove('hover');
        }
      };
      
      // Przypisujemy funkcje do zdarzeń
      grid.addEventListener('dragstart', handleDragStart);
      grid.addEventListener('dragover', handleDragOver);
      grid.addEventListener('dragleave', handleDragLeave);
      grid.addEventListener('drop', handleDrop);
      
      
      
      

}



drawBoard();