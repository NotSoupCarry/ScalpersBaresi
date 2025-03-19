// Inizializzazione delle variabili
let kills: number = parseInt(localStorage.getItem("kills") || "0"); // Recupero le kill salvate
let sceltaIniziale: string | null = localStorage.getItem("sceltaIniziale"); // Recupero la scelta salvata

// Recupero degli elementi HTML
const home = document.getElementById("home") as HTMLAnchorElement;
const primaSceltaDiv = document.getElementById("primo") as HTMLDivElement;
const secondo_Buono = document.getElementById("secondo_Buono") as HTMLDivElement;
const secondo_Cattivo = document.getElementById("secondo_Cattivo") as HTMLDivElement;
const finale = document.getElementById("finale") as HTMLDivElement;
const outputParagraph = document.getElementById("outputFinale") as HTMLParagraphElement;

// Recupero degli elementi HTML per il minigioco
const miniGameDiv = document.getElementById("miniGame") as HTMLDivElement;
const miniGameButton = document.getElementById("miniGameButton") as HTMLButtonElement;
const refreshButton = document.getElementById('refreshButton') as HTMLButtonElement;

// Pulsanti per la prima scelta
const btnBuono = document.getElementById("btnBuono") as HTMLButtonElement;
const btnCattivo = document.getElementById("btnCattivo") as HTMLButtonElement;

// Pulsanti per la seconda scelta
const btnBuonoNoKill = document.getElementById("btnBuonoNoKill") as HTMLButtonElement;
const btnBuonoKill = document.getElementById("btnBuonoKill") as HTMLButtonElement;
const btnCattivoNoKill = document.getElementById("btnCattivoNoKill") as HTMLButtonElement;
const btnCattivoKill = document.getElementById("btnCattivoKill") as HTMLButtonElement;

// Funzione per la scelta iniziale
function choosePath(choice: string): void {
    sceltaIniziale = choice;
    localStorage.setItem("sceltaIniziale", choice); // Salvo la scelta iniziale
    primaSceltaDiv.style.display = "none";

    if (choice === "buono") {
        secondo_Buono.style.display = "inline-block";
    } else {
        secondo_Cattivo.style.display = "inline-block";
    }
}

// Funzione per avviare il minigioco
function startMiniGame(): void {
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
function mostraFinale(): void {
    localStorage.clear();
    primaSceltaDiv.style.display = "none";
    secondo_Buono.style.display = "none";
    secondo_Cattivo.style.display = "none";
    finale.style.display = "inline-block";
    home.style.display = "none";

    let messaggio: string;
    const finaleImage = document.getElementById("finalImage") as HTMLImageElement;

    switch (`${kills}-${sceltaIniziale}`) {
        case "0-buono":
            finaleImage.src = "/assets/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg";
            messaggio = "Hai scelto di non uccidere nessuno. Sei un vero eroe strafighissimo!";
            break;
        case "0-cattivo":
            finaleImage.src = "/assets/q8eVQFs19rEyy8cWeWMXvST9LSBFp_1q.png";
            messaggio = "Hai scelto di partire come uno stronzo, ma non hai ucciso nessuno. Sei un BASTARDINO!";
            break;
        case "1-buono":
            finaleImage.src = "/assets/vannacci-kn2E-U34602242779152D4C-656x492@Corriere-Web-Sezioni.jpg";
            messaggio = "Hai scelto di partire come buono e hai ucciso qualcuno. Sei un INFAME!";
            break;
        case "1-cattivo":
            finaleImage.src = "/assets/1737496564521.jpg";
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
    } else if (sceltaIniziale === "cattivo") {
        choosePath("cattivo");
    }
}

