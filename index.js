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
let jugando = prompt("Quieres jugar a los penales? (esc para salir)");
while (jugando !== "esc" && jugando !== "ESC") {
  //selección equipos
  const equipo1 = prompt("Como se llama tu equipo?");
  const equipo2 = prompt("Como se llama el equipo rival?");
  let count1 = 0;
  let count2 = 0;
  for (let i = 1; i === i; i++) {
    console.log("i = " + i);
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
    console.log("goles1: " + count1);
    //verificación de break
    if (i >= 4 && count1 - count2 >= 3) {
      alert("GANOOOOOOOOOOO " + equipo1 + "✨✨✨✨");
      break;
    } else if (i === 5 && count1 - count2 >= 2) {
      alert("GANOOOOOOOOOOO " + equipo1 + "✨✨✨✨");
      break;
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
    console.log("goles2: " + count2);
    if (i >= 3 && count2 - count1 >= 3) {
      alert("GANOOOOOOOOOOO " + equipo2 + "💀💀💀💀");
      break;
    } else if (i >= 4 && count2 - count1 >= 2) {
      alert("GANOOOOOOOOOOO " + equipo2 + "💀💀💀💀");
      break;
    } else if (i >= 5 && count2 - count1 >= 1) {
      alert("GANOOOOOOOOOOO " + equipo2 + "💀💀💀💀");
      break;
    } else if (i >= 5 && count1 - count2 >= 1) {
      alert("GANOOOOOOOOOOO " + equipo1 + "✨✨✨✨");
      break;
    }
  }

  jugando = prompt("Quieres volver a jugar?(esc para salir)");
}
