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
        grid.appendChild(cell);
        total_cells--;
    }
}

createGrid(64);
