//RICHIESTA NUMERO
const numero = parseInt(prompt("Inserire un numero: "));
console.log(`Il numero inserito è ${numero}`);

//Controllo numero con resto
if ((numero % 2) === 0) {
    alert(`Il numero ${numero} è pari`);
} else {
    alert(`Il numero ${numero} è dispari`);
}