"use strict";
// Inizializzazione delle variabili
let kills = parseInt(localStorage.getItem("kills") || "0"); // Recupero le kill salvate
let sceltaIniziale = localStorage.getItem("sceltaIniziale"); // Recupero la scelta salvata
// Recupero degli elementi HTML
const home = document.getElementById("home");
const primaSceltaDiv = document.getElementById("primo");
const secondo_Buono = document.getElementById("secondo_Buono");
const secondo_Cattivo = document.getElementById("secondo_Cattivo");
const finale = document.getElementById("finale");
const outputParagraph = document.getElementById("outputFinale");
// Recupero degli elementi HTML per il minigioco
const miniGameDiv = document.getElementById("miniGame");
const miniGameButton = document.getElementById("miniGameButton");
const refreshButton = document.getElementById('refreshButton');
// Pulsanti per la prima scelta
const btnBuono = document.getElementById("btnBuono");
const btnCattivo = document.getElementById("btnCattivo");
// Pulsanti per la seconda scelta
const btnBuonoNoKill = document.getElementById("btnBuonoNoKill");
const btnBuonoKill = document.getElementById("btnBuonoKill");
const btnCattivoNoKill = document.getElementById("btnCattivoNoKill");
const btnCattivoKill = document.getElementById("btnCattivoKill");
// Funzione per la scelta iniziale
function choosePath(choice) {
    sceltaIniziale = choice;
    localStorage.setItem("sceltaIniziale", choice); // Salvo la scelta iniziale
    primaSceltaDiv.style.display = "none";
    if (choice === "buono") {
        secondo_Buono.style.display = "inline-block";
    }
    else {
        secondo_Cattivo.style.display = "inline-block";
    }
}
// Funzione per avviare il minigioco
function startMiniGame() {
    miniGameDiv.style.display = "inline-block";
    let clicked = false;
    // Evento per il clic sul pulsante
    miniGameButton.addEventListener("click", () => {
        if (!clicked) {
            clicked = true;
            kills++;
            miniGameDiv.style.display = "none";
            localStorage.setItem("kills", kills.toString()); // Salvo le kill
            mostraFinale(); // Vai direttamente al finale
        }
    });
    // Timer per il limite di tempo
    setTimeout(() => {
        if (!clicked) {
            miniGameDiv.style.display = "none";
            localStorage.setItem("kills", kills.toString()); // Salvo le kill
            mostraFinale(); // Vai direttamente al finale
        }
    }, 3000);
}
// Funzione per mostrare il finale
function mostraFinale() {
    localStorage.clear();
    primaSceltaDiv.style.display = "none";
    secondo_Buono.style.display = "none";
    secondo_Cattivo.style.display = "none";
    finale.style.display = "inline-block";
    home.style.display = "none";
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
// Eventi per la scelta iniziale
btnBuono.addEventListener("click", () => choosePath("buono"));
btnCattivo.addEventListener("click", () => choosePath("cattivo"));
// Eventi per le scelte secondarie
btnBuonoNoKill.addEventListener("click", () => mostraFinale());
btnBuonoKill.addEventListener("click", startMiniGame);
btnCattivoNoKill.addEventListener("click", () => mostraFinale());
btnCattivoKill.addEventListener("click", startMiniGame);
// Aggiungi l'evento di click
refreshButton.addEventListener('click', () => {
    location.reload(); // Ricarica la pagina
});
// **Ripristino dello stato del gioco se esiste**
window.onload = function () {
    if (sceltaIniziale === "buono") {
        choosePath("buono");
    }
    else if (sceltaIniziale === "cattivo") {
        choosePath("cattivo");
    }
};
