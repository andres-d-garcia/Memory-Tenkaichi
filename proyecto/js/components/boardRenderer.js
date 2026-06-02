// boardRenderer.js - Generación dinámica del tablero (Grid)
function renderBoard(container,items){
  container.innerHTML = '';
  const grid = document.createElement('div');
  grid.className = 'board';
  items.forEach(item => {
    const cell = document.createElement('button');
    cell.className = 'card';
    cell.dataset.value = item;
    grid.appendChild(cell);
  });
  container.appendChild(grid);
}
window.renderBoard = renderBoard;
