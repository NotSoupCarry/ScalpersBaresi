"use strict";
const npcStarter = document.getElementById("npcStarter");
const npcDialog = document.getElementById("npcDialog");
const npcDialogText = document.getElementById("npcDialogText");
const closeNpcDialog = document.getElementById("closeNpcDialog");
const img = document.getElementById("npcCharacter");
const return_index = document.getElementById("return_index");
const sleepStarter = document.getElementById("sleepStarter");
const sleepText = document.getElementById("sleepText");
const sleepMenu = document.getElementById("sleepMenu");
const imgSleep = document.getElementById("imgSleep");
img.style.display = "none";
// Funzione per avviare il dialogo 
function startDialog() {
    npcDialogText.textContent = "si proprj nu trmon";
    npcDialog.style.display = "inline-block";
    npcStarter.style.display = "none";
    closeNpcDialog.style.display = "block";
    img.style.display = "block";
    closeNpcDialog.style.display = "inline-block";
    sleepMenu.style.display = "none";
    imgSleep.style.display = "none";
}
// Funzione per chiudere il dialogo
function closeDialog() {
    npcStarter.style.display = "inline-block";
    sleepMenu.style.display = "inline-block";
    npcDialog.style.display = "none";
    img.style.display = "none";
}
// Aggiungi event listener ai bottoni
npcStarter.addEventListener("click", startDialog);
closeNpcDialog.addEventListener("click", closeDialog);
// Funzione per dormire
function sleep() {
    npcStarter.style.display = "none";
    npcDialog.style.display = "none";
    sleepStarter.style.display = "none";
    return_index.style.display = "none";
    sleepText.textContent = "zzz";
    imgSleep.style.display = "inline-block";
    setTimeout(() => {
        imgSleep.style.display = "none";
        sleepText.textContent = "HAI RIPOSATO";
        setTimeout(() => {
            location.reload();
        }, 1000);
    }, 3000);
}
// Aggiungi event listener ai bottoni
npcStarter.addEventListener("click", startDialog);
closeNpcDialog.addEventListener("click", closeDialog);
sleepStarter.addEventListener("click", sleep);
