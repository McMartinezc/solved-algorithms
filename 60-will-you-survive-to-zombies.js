/** 
 * Un algoritmo al más puro estilo Plantas contra Zombies
 * 
 * Enunciado: https://www.codewars.com/kata/5deeb1cc0d5bc9000f70aa74 Kyu 7

    "Te encuentras en una situación bastante desafortunada. Has herido tu pierna y no puedes caminar, y un grupo de zombies se acerca lentamente hacia ti, decididos a comerse tu cerebro. Afortunadamente, eres un tirador experto y tienes tu confiable rifle a tu alcance.

Los zombies comienzan a una distancia de X metros y se mueven a una velocidad de 0.5 metros por segundo. Cada segundo, primero disparas a un zombie y luego los zombies restantes avanzan otros 0.5 metros.

Si algún zombie logra llegar a 0 metros, serás comido. Si te quedas sin balas antes de disparar a todos los zombies, también serás comido. Para simplificar, podemos ignorar el tiempo dedicado a recargar.

Escribe una función que acepte el número total de zombies, una distancia en metros y la cantidad de balas que tienes.

Si disparas a todos los zombies, devuelve "Disparaste a todos los X zombies". Si te comen antes de matar a todos los zombies y antes de quedarte sin balas, devuelve "Disparaste a X zombies antes de ser comido: abrumado". Si te quedas sin balas antes de disparar a todos los zombies, devuelve "Disparaste a X zombies antes de ser comido: te quedaste sin balas".

(Si te quedas sin balas al mismo tiempo que los zombies restantes llegan a ti, devuelve "Disparaste a X zombies antes de ser comido: abrumado"). ¡Buena suerte! (Creo que la vas a necesitar)."
*/

//otra manera de hacer el bucle while
function zombieShootout(zombies, range, ammo) {
  let seconds = 0;

  while (zombies > 0 && ammo > 0) {
    // Verificamos si un zombie llega a 0 metros antes de disparar
    if (range <= 0) {
      return `Disparaste a ${seconds} zombies antes de ser comido: abrumado.`;
    }

    // Disparamos a un zombie y reducimos una bala
    zombies--;
    ammo--;

    // Avanzamos el resto de zombies
    range -= 0.5;

    // Avanzamos un segundo
    seconds++;
  }

  // Si nos quedamos sin balas antes de matar a todos los zombies
  if (zombies > 0) {
    return `Disparaste a ${seconds} zombies antes de ser comido: te quedaste sin balas.`;
  }

  // Si logramos matar a todos los zombies
  return `Disparaste a todos los ${seconds} zombies.`;
}

console.log(zombieShootout(10, 5, 7)); // Salida: Disparaste a 5 zombies antes de ser comido: te quedaste sin balas.
console.log(zombieShootout(3, 10, 10)); // Salida: Disparaste a todos los 3 zombies.
console.log(zombieShootout(100, 8, 200)); // Salida: Disparaste a todos los 16 zombies.
console.log(zombieShootout(50, 10, 8)); // Salida: Disparaste a 7 zombies antes de ser comido: te quedaste sin balas.