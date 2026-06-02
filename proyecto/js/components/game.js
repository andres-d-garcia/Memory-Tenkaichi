// game.js - estado y variables de juego compartidas
let firstCardSelected = null;  // Almacena el elemento del DOM de la primera carta volteada
let secondCardSelected = null; // Almacena el elemento del DOM de la segunda carta volteada
let cardsFlippedThisTurn = 0;   // Contador para controlar que no volteen más de 2 cartas a la vez

window.gameVars = window.gameVars || {};
window.gameVars.firstCardSelected = firstCardSelected;
window.gameVars.secondCardSelected = secondCardSelected;
window.gameVars.cardsFlippedThisTurn = cardsFlippedThisTurn;
