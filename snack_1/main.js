/* CONSEGNA:
Snack 1 
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine. */

const zucchine = [
    {varietà:'nera di Milano', peso: 0.3, lunghezza: 18},
    {varietà:'romanesco', peso: 0.5, lunghezza: 14},
    {varietà:'ortolando di Faenza', peso: 0.8, lunghezza: 9},
    {varietà:'lunga fiorentina', peso: 0.9, lunghezza: 17},
    {varietà:'siciliano', peso: 0.4, lunghezza: 20},
    {varietà:'striata di Napoli', peso: 0.7, lunghezza: 10},
    {varietà:'bianca triestina', peso: 0.6, lunghezza: 15},
    {varietà:'rigata pugliese', peso: 0.6, lunghezza: 20},
    {varietà:'tondo di Piacenza',peso: 0.8, lunghezza: 7},
    {varietà:'tondo di Nizza',peso: 0.5, lunghezza: 4}
]

console.log(zucchine);

let result = 0;
zucchine.forEach(element => {
    result += element.peso
});

console.log(result.toFixed(3) + 'kg');