// engine.js - Mecánica pura: voltear, comparar pares y bloquear tablero
function createEngine(){
  const state = { locked: false };
  function flip(card){ if(state.locked) return; card.classList.add('flipped') }
  function compare(a,b){ return a.dataset.value === b.dataset.value }
  return { flip, compare };
}
window.createEngine = createEngine;
