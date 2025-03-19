const kills: number = 0;

const primaSceltaDiv =  document.getElementById("primo") as HTMLDivElement;
const secondo_Buono = document.getElementById("secondo_Buono") as HTMLDivElement;
const secondo_Cattivo = document.getElementById("secondo_Cattivo") as HTMLDivElement;
const finale = document.getElementById("finale") as HTMLDivElement;
const outputParagraph = document.getElementById("outputFinale") as HTMLParagraphElement;

function mostraFinale(kills: number, sceltaIniziale: number): void{
    primaSceltaDiv.style.display = "none";
    secondo_Buono.style.display = "none";
    secondo_Cattivo.style.display = "none";
    finale.style.display = "block";

    if(kills === 0 && sceltaIniziale === 0){
        outputParagraph.innerText = "Hai scelto di non uccidere nessuno. Sei un vero eroe strafighissimo!";
    }else if( kills === 0 && sceltaIniziale === 1){
        outputParagraph.innerText = "Hai scelto di partire come uno stronzo, ma non hai ucciso nessuno. Sei un BASTARDINO!";
    }else if( kills === 1 && sceltaIniziale === 0){
        outputParagraph.innerText = "Hai scelto di partire come buono e hai ucciso qualcuno. Sei un INFAME!";
    }else if( kills === 1 && sceltaIniziale === 1){
        outputParagraph.innerText = "Hai scelto di partire come stronzo e hai ucciso qualcuno. Sei uno SCALPER!";
    }

    }
