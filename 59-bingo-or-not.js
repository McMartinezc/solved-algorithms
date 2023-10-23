/**
 * 
 * URL: Kata https://www.codewars.com/kata/5a1ee4dfffe75f0fcb000145 Kyu 7
 * 
 * For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.


Cada número corresponde a una letra del alfabeto en orden (por ejemplo, 1 = A, 2 = B, etc.). Escribe una función en la que ganarás el juego si tus números pueden formar la palabra "BINGO". No es necesario que estén en el orden correcto en la lista de entrada. De lo contrario, perderás. Tus resultados deben ser "GANAR" o "PERDER", respectivamente.
 */

function bingo(numbers) {
  // your winning code here
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const targetWord = ["B","I","N","G","O"];

  //Convertimos el array de numeros a las letras que le corresponda
  const numbersLetters = numbers.map(num=> alphabet[num-1]); //num- porque empieza por A-->1
  console.log(numbersLetters)

  //Filtramos las letras de targerWord que esten presentes en la array proporcionada por el usuario
  const bingoLetters = targetWord.filter(letter => numbersLetters.includes(letter));

  console.log(bingoLetters)
  return bingoLetters.length===5 ? "WIN" : "LOSE";
}

console.log(bingo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // "LOSE"
console.log(bingo([21, 13, 2, 7, 5, 14, 7, 15, 9, 10])); // "WIN"
console.log(bingo([21, 13, 1, 7, 5, 14, 7, 15, 9, 10])); // "WIN"
console.log(bingo([21, 13, 2, 7, 5, 14, 7, 15, 9, 10,3,2])); // "WIN"