// Inizializzazione delle variabili
let kills: number = 0;
let sceltaIniziale: string | null = null;

// Recupero degli elementi HTML
const primaSceltaDiv = document.getElementById("primo") as HTMLDivElement;
const secondo_Buono = document.getElementById("secondo_Buono") as HTMLDivElement;
const secondo_Cattivo = document.getElementById("secondo_Cattivo") as HTMLDivElement;
const finaleDiv = document.getElementById("finale") as HTMLDivElement;
const finaleText = document.getElementById("finaleText") as HTMLParagraphElement;
const restartBtn = document.getElementById("restart") as HTMLButtonElement;

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

// Funzione per uccidere (incrementa il contatore delle kill)
function commitKill(): void {
    kills++;
    mostraFinale();
}

// Eventi per la scelta iniziale
btnBuono.addEventListener("click", () => choosePath("buono"));
btnCattivo.addEventListener("click", () => choosePath("cattivo"));

// Eventi per le scelte secondarie
btnBuonoNoKill.addEventListener("click", mostraFinale);
btnBuonoKill.addEventListener("click", commitKill);
btnCattivoNoKill.addEventListener("click", mostraFinale);
btnCattivoKill.addEventListener("click", commitKill);

// Evento per resettare il gioco
restartBtn.addEventListener("click", () => location.reload());
