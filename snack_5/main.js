/* Snack5
CONSEGNA: Scrivi una funzione che accetti tre argomenti:
un array e due numeri ("a" più piccolo di "b" e "b" grande al massimo quanto il numero di elementi dell'array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra "a" e "b". */


const arrayy = [1,2,3,4,5,6,7,8,9,10];
const firstNumber = 1;
const secondNumber = 10;
const secondArray = compilatore(arrayy, firstNumber, secondNumber);


console.log(secondArray);

function compilatore(array, firstNumber, secondNumber) {

    let secondArray = array.filter(element => {
        if(element>firstNumber && element<secondNumber){
            return true;
        }
        return false;
    })

    return secondArray;
}
