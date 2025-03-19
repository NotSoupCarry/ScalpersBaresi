// Inizializzazione delle variabili
let kills: number = 0;
let sceltaIniziale: string;
let arrayScelte: string[] = []; // Array di stringhe

// Recupero degli elementi HTML
const primaSceltaDiv = document.getElementById("primo") as HTMLDivElement;
const secondo_Buono = document.getElementById("secondo_Buono") as HTMLDivElement;
const secondo_Cattivo = document.getElementById("secondo_Cattivo") as HTMLDivElement;

const finaleDiv = document.getElementById("finale") as HTMLDivElement;
const finaleText = document.getElementById("finaleText") as HTMLParagraphElement;

const finale = document.getElementById("finale") as HTMLDivElement;
const outputParagraph = document.getElementById("outputFinale") as HTMLParagraphElement;

// Recupero degli elementi HTML per il minigioco
const miniGameDiv = document.getElementById("miniGame") as HTMLDivElement;
const miniGameButton = document.getElementById("miniGameButton") as HTMLButtonElement;

// Pulsanti per la prima scelta
const btnBuono = document.getElementById("btnBuono") as HTMLButtonElement;
const btnCattivo = document.getElementById("btnCattivo") as HTMLButtonElement;

// Pulsanti per la seconda scelta
const btnBuonoNoKill = document.getElementById("btnBuonoNoKill") as HTMLButtonElement;
const btnBuonoKill = document.getElementById("btnBuonoKill") as HTMLButtonElement;
const btnCattivoNoKill = document.getElementById("btnCattivoNoKill") as HTMLButtonElement;
const btnCattivoKill = document.getElementById("btnCattivoKill") as HTMLButtonElement;

// Funzione per la scelta iniziale (buono o cattivo)
function choosePath(choice: string): void {
    sceltaIniziale = choice;
    primaSceltaDiv.style.display = "none";

    if (choice === "buono") {
        secondo_Buono.style.display = "block";
    } else {
        secondo_Cattivo.style.display = "block";
    }
}

// Funzione per avviare il minigioco
function startMiniGame(): void {
    miniGameDiv.style.display = "block";

    let clicked = false;

    // Evento per il clic sul pulsante
    miniGameButton.addEventListener("click", () => {
        if (!clicked) {
            clicked = true;
            kills++;
            miniGameDiv.style.display = "none";
            mostraFinale(kills, sceltaIniziale); // Vai direttamente al finale
        }
    });

    // Timer per il limite di tempo
    setTimeout(() => {
        if (!clicked) {
            miniGameDiv.style.display = "none";
            mostraFinale(kills, sceltaIniziale); // Vai direttamente al finale
        }
    }, 3000);
}

// Eventi per la scelta iniziale
btnBuono.addEventListener("click", () => choosePath("buono"));
btnCattivo.addEventListener("click", () => choosePath("cattivo"));

function mostraFinale(kills: number, sceltaIniziale: string): void {
    primaSceltaDiv.style.display = "none";
    secondo_Buono.style.display = "none";
    secondo_Cattivo.style.display = "none";
    finale.style.display = "block";

    let messaggio: string;

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
btnBuonoKill.addEventListener("click", startMiniGame);
btnCattivoNoKill.addEventListener("click", () => mostraFinale(kills, sceltaIniziale));
btnCattivoKill.addEventListener("click", startMiniGame);


