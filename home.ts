const npcStarter =  document.getElementById("npcStarter") as HTMLButtonElement;
const save = document.getElementById("save") as HTMLButtonElement;

const npcDialog = document.getElementById("npcDialog") as HTMLDivElement;
const npcDialogText = document.getElementById("npcDialogText") as HTMLParagraphElement
const closeNpcDialog = document.getElementById("closeNpcDialog") as HTMLButtonElement;


// Funzione per avviare il dialogo
function startDialog() {
    npcDialogText.textContent = "si proprj nu trmon";
    npcDialog.style.display = "block";
    closeNpcDialog.style.display = "block";
}

// Funzione per chiudere il dialogo
function closeDialog() {
    npcDialog.style.display = "none"; 
}

// Aggiungi event listener ai bottoni
npcStarter.addEventListener("click", startDialog);
closeNpcDialog.addEventListener("click", closeDialog);
