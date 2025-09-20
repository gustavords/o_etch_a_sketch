

function createGrid(size) {
    const grid = document.querySelector(`.grid`);
    let width = grid.offsetWidth;

    let total_cells = size * size;

    while (total_cells > 1) {
        const cell = document.createElement(`div`);
        cell.style.flex = `1`;
        cell.style.flexBasis = `${width / size}px`;
        cell.style.boxSizing = `border-box`;
        cell.style.border = `1px red solid`;
        cell.classList.add(`cell`);
        grid.appendChild(cell);
        total_cells--;
    }
}

function resizeGrid() {
    let size = ``;
    const size_btn = document.querySelector(`.grid_size_btn`);

    size_btn.addEventListener(`click`, () => {
        size = prompt(`Write an even number from 12-64 for grid size`);

        while (size % 2 || size < 12 || size > 64 || isNaN(size))  {
            console.log(size)
            size = prompt(`Write an even number from 12-64 for grid size`);
        }

        removeGrid();
        createGrid(size);
    });

    function removeGrid() {
        const cells = document.querySelectorAll(`.cell`);
        const grid = document.querySelector(`.grid`);

        cells.forEach((cell) => {
            grid.removeChild(cell);
        });
    }
}

function paint() {
    // const cells = document.querySelectorAll(`.cell`);
    const grid = document.querySelector(`.grid`);


    function colourCell(e) {
        e.target.style.backgroundColor = `blue`;
    }

    grid.addEventListener(`mousedown`, (e) => {
        colourCell(e);
        grid.addEventListener(`mouseover`, colourCell);
        e.stopPropagation();
    });

    grid.addEventListener(`mouseup`, (e) => {
        grid.removeEventListener(`mouseover`, colourCell, {});
        e.stopPropagation();
    });

}

createGrid(16);
paint();
resizeGrid();