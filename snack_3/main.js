/* Snack3
CONSEGNA: Scrivi una funzione che accetti una stringa come argomento e la ritorni girata
(es. Ciao -> oaiC)*/


const word = prompt ('Type a Word');
reverseWord(word);

function reverseWord(input) {
    let result ='';
for (let i = input.length - 1; i >= 0; i--) {
    const element = input[i];
    result += element;
}
alert (result);
}