//tanda de penales
//sistema de jugar o no ✅
//sistema de designacion de equipos
//sistema de eleccion de lado
//sistema de aleatoriedad de arquero
//sistema while que detecte si seguis "vivo"

function comparator(lado) {
  //generador de nro random
  let random = Math.floor(Math.random() * 2);

  //comparacion si ambos son el mismo lado
  if (lado === random) {
    adentro = 0;
  } else {
    adentro = 1;
  }
  return adentro;
}
function play(num1, num2, ronda) {
  let play = true;
  switch (ronda) {
    case 1:
      break;
    case 2:
      break;
    case 3:
      break;
    case 4:
      if (Math.abs(num1 - num2) >= 3) {
        play = false;
      }
      break;
    case 5:
      if (Math.abs(num1 - num2) >= 2) {
        play = false;
      }
      break;
    default:
      if (Math.abs(num1 - num2) >= 1) {
        play = false;
      }
  }
  return play;
}
let jugando = prompt("Quieres jugar a los penales? (esc para salir)");
while (jugando !== "esc" && jugando !== "ESC") {
  //selección equipos
  const equipo1 = prompt("Como se llama tu equipo?");
  const equipo2 = prompt("Como se llama el equipo rival?");
  let count1 = 0;
  let count2 = 0;
  let i = 1;

  //proceso de patear
  console.log(play(count1, count2, i));
  while (play(count1, count2, i)) {
    //patear
    alert(
      "-" +
        equipo1 +
        ": " +
        count1 +
        "/" +
        (i - 1) +
        "\n-" +
        equipo2 +
        ": " +
        count2 +
        "/" +
        (i - 1) +
        " \n Va a patear " +
        equipo1 +
        ", Preparado/a?"
    );
    let eleccion = parseInt(
      prompt(" Hacia donde patear? \n izquierda: 0 \n derecha: 1")
    );
    while (eleccion !== 0 && eleccion !== 1) {
      eleccion = parseInt(
        prompt("Esa no es una opción valida!!! \n izquierda: 0 \n derecha: 1")
      );
    }
    //verificacion de gol
    let inout = comparator(eleccion);
    if (inout === 0) {
      alert("El Arquero La atajo!!!" + "😬😬😬😬");
    } else {
      alert("GOLAZOOOO" + "⚽⚽⚽⚽");
      count1 = count1 + 1;
    }
    //atajar
    alert(
      "-" +
        equipo1 +
        ": " +
        count1 +
        "/" +
        i +
        "\n-" +
        equipo2 +
        ": " +
        count2 +
        "/" +
        (i - 1) +
        " \n Va a patear " +
        equipo2 +
        ", Preparado/a?"
    );
    eleccion = parseInt(
      prompt(" Hacia donde lanzarse? \n izquierda: 0 \n derecha: 1")
    );
    while (eleccion !== 0 && eleccion !== 1) {
      eleccion = parseInt(
        prompt("Esa no es una opción valida!!! \n izquierda: 0 \n derecha: 1")
      );
    }
    //verificacion de atajada
    inout = comparator(eleccion);
    if (inout === 0) {
      alert("PERO QUE ATAJADON" + "🧤🧤🧤🧤");
    } else {
      alert("gol del rival!" + "😬😬😬😬");
      count2 = count2 + 1;
    }
    i++;
    console.log(play(count1, count2, i));
    console.log("cuenta1: " + count1);
    console.log("cuenta1: " + count2);
    console.log("ronda " + i);
  }
  if (count1 > count2) {
    alert("GANOOOOOOOOO " + equipo1 + ", Felicitaciones!!!" + "✨✨✨");
  } else {
    alert(
      "GANOOOOOOOOO " + equipo2 + ", no pasa nada, sera la proxima" + "😔😔😔"
    );
  }
  jugando = prompt("Quieres volver a jugar?(esc para salir)");
}
