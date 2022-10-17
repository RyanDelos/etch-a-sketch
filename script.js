'use strict';

// Variable Declaration
const DEFAULT_SIZE = 16;
const button = document.querySelector('.btn');
const grid = document.querySelector('.grid-container');
const date = new Date();
let newYear = date.getFullYear();
let currentYear = document.querySelector('.year');

// makeRows function creates 16x16 grid
function makeGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let c = 0; c < size * size; c++) {
    let cell = document.createElement('div');
    // cell.innerText = c + 1;
    grid.appendChild(cell).className = 'grid-item';
  }
}
makeGrid(DEFAULT_SIZE);

function clearGrid() {
  grid.innerText = '';
}
// hover effect
function hover() {
  let gridCell = document.querySelectorAll('.grid-item');
  for (let i = 0; i < gridCell.length; i++) {
    gridCell[i].addEventListener('mouseover', (e) => {
      gridCell[i].style.backgroundColor = 'black';
    });
  }
}
hover();

button.addEventListener('click', function () {
  let gridValue = prompt('How many cells?');
  clearGrid();
  if (gridValue >= 1 && gridValue <= 64) {
    makeGrid(gridValue, gridValue);
    hover();
  } else {
    alert(`Number has to be between 1 through 64`);
  }
});

currentYear.innerText = newYear;
