// matchmaking.js - Reglas de modos: solitario, pvp por turnos, libre
function setupMode(mode){
  switch(mode){
    case 'pvp': return { turns: true };
    default: return { turns: false };
  }
}
window.setupMode = setupMode;
