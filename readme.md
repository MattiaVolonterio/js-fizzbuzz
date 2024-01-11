## js-fizzbuzz

# TRACCIA

```plaintext
@qui
Ciao ragazzi,
Esercizio di oggi: FizzBuzz

Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz".
Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?

Consigli del giorno:
1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso le funzioni document.createElement() e append()) un elemento html con il numero o la stringa corretta da mostrare.

BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:
```

# SVOLGIMENTO

### CONSEGNA:

1. Dichiaro una costante i uguale a 1
2. FINCHE i non è uguale a 100:
   - SE i è divisibile per 15:
     - Stampo FizzBuzz
   - ALTRIMENTI SE i è divisibile per 5:
     - Stampo Buzz
   - ALTRIMENTI SE i è divisibile per 3:
     - Stampo Fizz
   - ALTRIMENTI
     - stampo in console i
   - incremento i di 1

### BONUS 1:

1. creo un container nell'html
2. creo una varibile e le assegno l'oggeto container creato
3. FINCHE i non è uguale a 100:

   - Creo una variabile x
   - Creo un elemento box

   - SE i è divisibile per 15:
     - assegno a x la stringa FizzBuzz
   - ALTRIMENTI SE i è divisibile per 5:
     - assegno a x la stringa Buzz
   - ALTRIMENTI SE i è divisibile per 3:
     - assegno a x la stringa Fizz
   - ALTRIMENTI

     - assegno a x il valore di i

   - assegno x all'interno dell'elemento box
   - aggiungo l'elemento box al container
   - incremento i di 1

### Bonus 2:

1. creo stili differenti in css per i diversi box
2. FINCHE i non è uguale a 100:

   - SE i è divisibile per 15:
     - assegno a box la classe corrispondente allo stile FizzBuzz
   - ALTRIMENTI SE i è divisibile per 5:
     - assegno a box la classe corrispondente allo stilea Buzz
   - ALTRIMENTI SE i è divisibile per 3:
     - assegno a box la classe corrispondente allo stile Fizz
   - ALTRIMENTI
     - assegno a box la classe corrispondente allo stile base
   - incremento i di 1

#### N.B. i vari passaggi si sommano tra di loro, non ci sarà un nuovo ciclo per ogni passaggio
