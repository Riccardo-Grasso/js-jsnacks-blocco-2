const array1 = [15, 2, 7];
const array2 = [5];

//indico la lunghezza degli array
let lunghezzaArr1 = array1.length;
console.log("Lunghezza array 1: " + lunghezzaArr1);

let lunghezzaArr2 = array2.length;
console.log("Lunghezza array 2: " + lunghezzaArr2);

//voglio che inserisca un nuovo numero finché array2 è più corto
while (lunghezzaArr2 < lunghezzaArr1) {
    array2.push(Math.floor(Math.random() * 101));
    lunghezzaArr2++;
}

//stampo
console.log("Array1: " + array1);
console.log("Array2: " + array2);