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

function zombieShootout(zombies, range, ammo) {
  //Calcular el tiempo que tardan los zombies en llegar a mi (range = distancia)
  let tiempo = range / 0.5;
  let segundos = 0; //Indica el tiempo que ha pasado


  while (segundos <= tiempo) {

    // Si disparamos a todos los zombies
    if (zombies <= 0) {
      return `Disparaste a todos los ${segundos} zombies.`;
    }

    // Disparar a un zombie y avanzar el tiempo
    zombies--;
    ammo--;
    segundos++;

    // Nos quedamos sin balas
    if (ammo <= 0) {
      return `Disparaste a ${segundos - 1} zombies antes de ser comido: te quedaste sin balas.`;
    }

    // Avanzar a los zombies restantes
    range -= 0.5;

    // Si algún zombie llega a 0 metros
    if (range <= 0) {
      return `Disparaste a ${segundos} zombies antes de ser comido: abrumado.`;
    }
  }

  // Los zombies te alcanzaron antes de que pudieras dispararles a todos
  return `Disparaste a ${tiempo} zombies antes de ser comido: abrumado.`;
}

// El console.log de la izquierda debe dar lo mismo que el console.log de la derecha, para cada llamada a la función

console.log(zombieShootout(3, 10, 10), "You shot all 3 zombies.");
console.log(
  zombieShootout(100, 8, 200),
  "You shot 16 zombies before being eaten: overwhelmed."
);
console.log(
  zombieShootout(50, 10, 8),
  "You shot 8 zombies before being eaten: ran out of ammo."
);
