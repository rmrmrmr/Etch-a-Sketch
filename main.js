function createCanvas(size) {
    let canvas = document.getElementById('canvas');
    let cuadros = canvas.querySelectorAll('div')
    cuadros.forEach(div=> div.remove());
    let totalSquares = size * size;

    //set the width and height of the canvas according to the input
        canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    //create the squares and append them into the canvas
        for (let i = 0; i < totalSquares; i++) {
            let id = 'square' + i.toString();
            let square = document.createElement('div');
            square.style.backgroundColor = 'white';
            square.addEventListener('mouseover', () =>{
                square.style.backgroundColor = 'black';
            });
            square.setAttribute('id', id);
            square.classList.add('square');;
            canvas.appendChild(square);
        }
}

let initSize = document.getElementById('newSize').value;
createCanvas(initSize);


function changeCanvas(input) {
    if(input >= 2 && input <=100){
        createCanvas(input)
    }
    if(input > 100) {
        alert('too big!');
    }
    if (input < 2) {
        alert('too small!');
    }
}

