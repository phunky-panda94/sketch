const body = document.querySelector('body');
const container = document.createElement('div');
container.classList.add('container')

let gridBox;

body.append(container);

for (let i = 0; i < 16; i++) {

    for ( let j = 0; j < 16; j++) {

        gridBox = document.createElement('div');
        gridBox.classList.add('grid-box');
        gridBox.addEventListener('mouseover', e => e.target.classList.add('lightgreen'));
        container.append(gridBox);

    }

};

function reset() {
    const gridBoxes = document.querySelectorAll(".grid-box");
    gridBoxes.forEach((gridBox) => {
        gridBox.classList.remove('lightgreen');
    });
}

const resetButton = document.createElement('button')
resetButton.textContent = 'Reset';
resetButton.onclick = () => reset();

body.append(resetButton);