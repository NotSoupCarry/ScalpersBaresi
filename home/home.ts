const npcStarter =  document.getElementById("npcStarter") as HTMLButtonElement;
const npcDialog = document.getElementById("npcDialog") as HTMLDivElement;
const npcDialogText = document.getElementById("npcDialogText") as HTMLParagraphElement;
const closeNpcDialog = document.getElementById("closeNpcDialog") as HTMLButtonElement;
const sleepMenu = document.getElementById("sleepMenu") as HTMLDivElement;
const sleepStarter = document.getElementById("sleepStarter") as HTMLButtonElement;
const sleepText = document.getElementById("sleepText") as HTMLParagraphElement;
const return_index = document.getElementById("return_index") as HTMLAnchorElement;

// Funzione per avviare il dialogo 
function startDialog() {
    npcDialogText.textContent = "si proprj nu trmon";
    npcDialog.style.display = "inline-block";
    npcStarter.style.display = "none";
    closeNpcDialog.style.display = "inline-block";
    sleepMenu.style.display = "none";
}

// Funzione per chiudere il dialogo
function closeDialog() {
    npcStarter.style.display = "inline-block";
    sleepMenu.style.display = "inline-block";
    npcDialog.style.display = "none"; 
}

// Funzione per dormire
function sleep() {
    npcStarter.style.display = "none";
    npcDialog.style.display = "none";
    sleepStarter.style.display = "none";
    return_index.style.display = "none";
    sleepText.textContent = "zzz"; 
    
    setTimeout(() => {
        sleepText.textContent = "HAI RIPOSATO"; 
        setTimeout(() => {
            location.reload(); 
        }, 1000);
    }, 5000);
}

// Aggiungi event listener ai bottoni
npcStarter.addEventListener("click", startDialog);
closeNpcDialog.addEventListener("click", closeDialog);
sleepStarter.addEventListener("click", sleep); // Aggiungi evento per il bottone "Dormi"
