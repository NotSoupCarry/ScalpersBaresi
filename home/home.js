"use strict";
const npcStarter = document.getElementById("npcStarter");
const npcDialog = document.getElementById("npcDialog");
const npcDialogText = document.getElementById("npcDialogText");
const closeNpcDialog = document.getElementById("closeNpcDialog");
const sleepMenu = document.getElementById("sleepMenu");
const sleepStarter = document.getElementById("sleepStarter");
const sleepText = document.getElementById("sleepText");
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
    sleepText.textContent = "zzz";
    setTimeout(() => {
        sleepText.textContent = "HAI RIPOSATO";
        setTimeout(() => {
            location.reload();
        }, 2000);
    }, 5000);
}
// Aggiungi event listener ai bottoni
npcStarter.addEventListener("click", startDialog);
closeNpcDialog.addEventListener("click", closeDialog);
sleepStarter.addEventListener("click", sleep); // Aggiungi evento per il bottone "Dormi"
