/* Snack4
CONSEGNA: Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall'altro es. [a,b,c], [1,2,3] --> [a,1,b,2,c,3]. */


const numbers =[1, 2, 3, 4, 5];
const words =['bambino','mele','carote', 'pompelmi', 'melanzane'];
const unitedArray = arrayUnite (numbers, words);
console.log(unitedArray);


function arrayUnite (arrayFirst, arraySecond) {
    const unitedArray =[];
    arrayFirst.forEach(index => {
        unitedArray.push(arrayFirst [index - 1]);
        unitedArray.push(arraySecond [index - 1]);
    });

    return unitedArray;
}