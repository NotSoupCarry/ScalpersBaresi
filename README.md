# Scalpers Baresi

Scalpers Baresi è un progetto interattivo basato su **HTML**, **CSS**, e **JavaScript/TypeScript**. Il gioco offre un'esperienza narrativa in cui il giocatore può scegliere il proprio percorso e influenzare il finale attraverso le proprie decisioni.

## Struttura del Progetto

La repository è organizzata come segue:

```plaintext
ScalpersBaresi/
├── assets/                 # Contiene immagini e risorse multimediali
├── home/                   # Contiene i file relativi alla pagina "Home"
│   ├── home.html           # Pagina HTML della Home
│   ├── home.css            # Stile CSS per la Home
│   ├── home.js             # Script JavaScript per la Home
│   └── home.ts             # Versione TypeScript dello script della Home
├── index/                  # Contiene i file relativi alla pagina "Index"
│   ├── index.html          # Pagina HTML principale
│   ├── index.css           # Stile CSS per la pagina principale
│   ├── index.js            # Script JavaScript per la pagina principale
│   └── index.ts            # Versione TypeScript dello script della pagina principale
├── .vscode/                # Configurazioni di Visual Studio Code
│   └── settings.json       # Configurazione per Live Server
├── .gitattributes          # Configurazione per la normalizzazione degli EOL
└── tsconfig.json           # Configurazione del compilatore TypeScript
```

## Funzionalità

### Pagina Home
- **Interazione con NPC**: Il giocatore può interagire con un NPC che mostra un dialogo.
- **Modalità "Dormi"**: Il giocatore può attivare una modalità di riposo che aggiorna la pagina dopo un breve intervallo.

### Pagina Index
- **Percorsi Narrativi**: Il giocatore può scegliere tra due percorsi principali: *Buono* o *Cattivo*.
- **Minigioco**: Un breve minigioco in cui il giocatore deve cliccare velocemente entro un limite di tempo.
- **Finali Multipli**: Il gioco offre diversi finali basati sulle scelte del giocatore e sul numero di "uccisioni".

## Tecnologie Utilizzate

- **HTML5**: Per la struttura delle pagine.
- **CSS3**: Per lo stile e il layout.
- **JavaScript**: Per la logica interattiva.
- **TypeScript**: Per una versione tipizzata degli script.
- **LocalStorage**: Per salvare lo stato del gioco tra le sessioni.

## Configurazione

### Prerequisiti
- **Node.js** (opzionale, se si desidera compilare TypeScript manualmente)
- **Visual Studio Code** (consigliato per lo sviluppo)

### Avvio del Progetto
1. Clona la repository:
   ```bash
   git clone https://github.com/tuo-username/ScalpersBaresi.git
   ```
2. Apri la cartella del progetto in **Visual Studio Code**.
3. Avvia il server locale con l'estensione *Live Server* (porta configurata su `5501`).

### Compilazione TypeScript
Se desideri modificare i file `.ts`, compila il codice con il comando:

```bash
tsc
```

## Contributi
Contributi, segnalazioni di bug e suggerimenti sono benvenuti! Sentiti libero di aprire una *issue* o inviare una *pull request*.

## Licenza
Questo progetto è distribuito sotto la licenza **MIT**. Consulta il file `LICENSE` per maggiori dettagli.

## Autori
Creato da **Scalpers Baresi Team**.

