const kills: number = 0;

const primaSceltaDiv =  document.getElementById("primo") as HTMLDivElement;
const secondo_Buono = document.getElementById("secondo_Buono") as HTMLDivElement;
const secondo_Cattivo = document.getElementById("secondo_Cattivo") as HTMLDivElement;
const finale = document.getElementById("finale") as HTMLDivElement;

function mostraFinale(kills: number, sceltaIniziale: number): void{
    primaSceltaDiv.style.display = "none";
    secondo_Buono.style.display = "none";
    secondo_Cattivo.style.display = "none";
    finale.style.display = "block";

    

}
