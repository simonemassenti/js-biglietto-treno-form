## Problema:
**Scrivere un programma che chieda all’utente:**
- **Il numero di chilometri da percorrere;**
- **Età del passeggero.**

**Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:**
- **il prezzo del biglietto è definito in base ai km (0.21 € al km);**
- **va applicato uno sconto del 20% per i minorenni;**
- **va applicato uno sconto del 40% per gli over 65.**

### Dati

- Prezzo del biglietto al km: 0.21;
- Sconto minorenni: 20%;
- Sconto Over 65: 40%;
- INPUT km che vuole percorrere;
- INPUT categoria a cui appartiene (minorenne, adulto, Over 65).

### Logica

Calcolo del prezzo base moltiplicando il prezzo al km per il numero di kilometri che vuole percorrere.
**SE** appartinene alla categoria dei _minorenni_ viene appliccato uno sconto al prezzo base del 20%;
**ALTIMENTI SE** appartiene alla categoria degli _Over-65_ viene appliccato uno sconto al prezzo base del 40%;
**INVECE SE** appartiene alla categoria degli _adulti_ non vien eappliccato nessuno sconto.

Viene infine preparato il messaggio da visualizzare

### Output

Viene stampato il messaggio
