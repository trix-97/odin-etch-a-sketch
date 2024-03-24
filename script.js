const gridContainer = document.querySelector('.grid-container');

function generateGrid() {
    for (let i = 1; i <= 256; i++) {
        const div = document.createElement('div');
        div.textContent = i;
        div.classList.add('grid-box');
        gridContainer.appendChild(div);
    }
}

generateGrid();
