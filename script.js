const container = document.querySelector('.container');
const button = document.getElementById('reset');
const newPad = document.getElementById('newPad');
const gridSize = 16;

for(let i = 0; i < gridSize * gridSize; i++){
    const square = document.createElement('div');
    square.classList.add('grid-square');
    const defaultSize = 950;
    const eachBoxSize = defaultSize / gridSize;
    square.style.width = `${eachBoxSize}px`;
    square.style.height = `${eachBoxSize}px`;


    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = '#b22222';
    })

    

    container.appendChild(square);

    button.addEventListener('click', () => {
        square.style.backgroundColor = 'white';
    })
}

    newPad.addEventListener('click', () => {
        let squaresPerSide = parseInt(prompt("Enter the number of squares per side (max 100):"), 10);

        if(isNaN(squaresPerSide) || squaresPerSide <= 0 || squaresPerSide > 100){
            alert('Please enter a valid number between 1 and 100.');
            return;
        }

        container.innerHTML = "";

        const totalSize = 950;
        const squareSize = totalSize / squaresPerSide;

        for(let i = 0; i < squaresPerSide * squaresPerSide; i++){
            const square = document.createElement('div');
            square.classList.add('grid-square');
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;

        
            square.addEventListener('mouseenter', () => {
                square.style.backgroundColor = '#b22222';
            })

            
        
            container.appendChild(square);
        
            button.addEventListener('click', () => {
                square.style.backgroundColor = 'white';
            })


        }
    })




