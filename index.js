"use strict";
// Inizializzazione delle variabili
let kills = 0;
let sceltaIniziale;
let arrayScelte = []; // Array di stringhe
// Recupero degli elementi HTML
const primaSceltaDiv = document.getElementById("primo");
const secondo_Buono = document.getElementById("secondo_Buono");
const secondo_Cattivo = document.getElementById("secondo_Cattivo");
const finaleDiv = document.getElementById("finale");
const finaleText = document.getElementById("finaleText");
const finale = document.getElementById("finale");
const outputParagraph = document.getElementById("outputFinale");
// Pulsanti per la prima scelta
const btnBuono = document.getElementById("btnBuono");
const btnCattivo = document.getElementById("btnCattivo");
// Pulsanti per la seconda scelta
const btnBuonoNoKill = document.getElementById("btnBuonoNoKill");
const btnBuonoKill = document.getElementById("btnBuonoKill");
const btnCattivoNoKill = document.getElementById("btnCattivoNoKill");
const btnCattivoKill = document.getElementById("btnCattivoKill");
// Funzione per la scelta iniziale (buono o cattivo)
function choosePath(choice) {
    sceltaIniziale = choice;
    primaSceltaDiv.style.display = "none";
    if (choice === "buono") {
        secondo_Buono.style.display = "block";
    }
    else {
        secondo_Cattivo.style.display = "block";
    }
}
// Funzione per uccidere (incrementa il contatore delle kill)
function commitKill() {
    kills++;
}
// Eventi per la scelta iniziale
btnBuono.addEventListener("click", () => choosePath("buono"));
btnCattivo.addEventListener("click", () => choosePath("cattivo"));
function mostraFinale(kills, sceltaIniziale) {
    primaSceltaDiv.style.display = "none";
    secondo_Buono.style.display = "none";
    secondo_Cattivo.style.display = "none";
    finale.style.display = "block";
    let messaggio;
    switch (`${kills}-${sceltaIniziale}`) {
        case "0-buono":
            messaggio = "Hai scelto di non uccidere nessuno. Sei un vero eroe strafighissimo!";
            break;
        case "0-cattivo":
            messaggio = "Hai scelto di partire come uno stronzo, ma non hai ucciso nessuno. Sei un BASTARDINO!";
            break;
        case "1-buono":
            messaggio = "Hai scelto di partire come buono e hai ucciso qualcuno. Sei un INFAME!";
            break;
        case "1-cattivo":
            messaggio = "Hai scelto di partire come stronzo e hai ucciso qualcuno. Sei uno SCALPER!";
            break;
        default:
            messaggio = "Finale non definito.";
            break;
    }
    outputParagraph.innerText = messaggio;
}
// Eventi per le scelte secondarie
btnBuonoNoKill.addEventListener("click", () => mostraFinale(kills, sceltaIniziale));
btnBuonoKill.addEventListener("click", commitKill);
btnCattivoNoKill.addEventListener("click", () => mostraFinale(kills, sceltaIniziale));
btnCattivoKill.addEventListener("click", commitKill);
