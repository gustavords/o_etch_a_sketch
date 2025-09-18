

function createGrid(size) {
    const grid = document.querySelector(`.grid`);
    let width = grid.offsetWidth;

    let total_cells = size * size;

    while (total_cells > 1) {
        const cell = document.createElement(`div`);
        cell.style.flex = `1`;
        cell.style.flexBasis = `${width/size}px`;
        cell.style.boxSizing = `border-box`;
        cell.style.border = `1px red solid`;
        cell.classList.add(`cell`);
        grid.appendChild(cell);
        total_cells--;
    }
}

function resizeGrid(){
    let size = prompt(`Write an even number from 12-64 for grid size`);
    createGrid(size);
}

function paint(colour){
    const cells = document.querySelectorAll(`.grid`);
    
    cells.forEach((cell)=>{
        cell.addEventListener(`mouseover`,(e)=>{
             e.target.style.backgroundColor =  `blue`;
        });
    });
    
}

createGrid(12);
paint();