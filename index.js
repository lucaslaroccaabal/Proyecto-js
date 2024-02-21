//tanda de penales
//sistema de jugar o no ✅
//sistema de designacion de equipos
//sistema de eleccion de lado
//sistema de aleatoriedad de arquero
//sistema while que detecte si seguis "vivo"

const comparator = (lado) => {
  //generador de nro random
  let random = Math.floor(Math.random() * 3);

  //comparacion si ambos son el mismo lado
  if (lado === random) {
    adentro = 0;
  } else {
    adentro = 1;
  }
  return adentro;
};
const play = (num1, num2, ronda) => {
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
};
class Equipo {
  constructor(nombre, goles, diferencia) {
    this.nombre = nombre;
    this.goles = goles;
    this.diferencia = diferencia;
  }
  gol() {
    this.goles++;
  }
}
alert("⚽TANDA DE PENALES🧤");
let jugando = prompt("Quieres empezar a jugar? (esc para salir)");
while (jugando.toLowerCase() !== "esc") {
  //selección equipos
  const nomEquipo1 = prompt("Como se llama tu equipo?");
  const Equipo1 = new Equipo(nomEquipo1, 0, 0);
  const nomEquipo2 = prompt("Como se llama el equipo rival?");
  const Equipo2 = new Equipo(nomEquipo2, 0, 0);
  let i = 1;

  //proceso de penales
  while (play(Equipo1.goles, Equipo2.goles, i)) {
    //patear
    alert(
      "-" +
        Equipo1.nombre +
        ": " +
        Equipo1.goles +
        "/" +
        (i - 1) +
        "\n-" +
        Equipo2.nombre +
        ": " +
        Equipo2.goles +
        "/" +
        (i - 1) +
        " \n Va a patear " +
        Equipo1.nombre +
        ", Preparado/a?👟⚽"
    );
    let eleccion = parseInt(
      prompt(" Hacia donde patear? \n izquierda: 0 \n medio: 1 \n derecha:2")
    );
    while (eleccion !== 0 && eleccion !== 1 && eleccion !== 2) {
      eleccion = parseInt(
        prompt(
          "Esa no es una opción valida!!! \n izquierda: 0 \n medio: 1 \n derecha: 2"
        )
      );
    }
    //verificacion de gol
    let inout = comparator(eleccion);
    if (inout === 0) {
      alert("El Arquero La atajo!!!" + "😬😬😬😬");
    } else {
      alert("GOLAZOOOO" + "⚽⚽⚽⚽");
      Equipo1.gol();
    }
    //atajar
    alert(
      "-" +
        Equipo1.nombre +
        ": " +
        Equipo1.goles +
        "/" +
        i +
        "\n-" +
        Equipo2.nombre +
        ": " +
        Equipo2.goles +
        "/" +
        (i - 1) +
        " \n Va a patear " +
        Equipo2.nombre +
        ", Preparado/a?🧤⚽"
    );
    eleccion = parseInt(
      prompt(" Hacia donde lanzarse? \n izquierda: 0 \n medio: 1 \n derecha: 2")
    );
    while (eleccion !== 0 && eleccion !== 1 && eleccion !== 2) {
      eleccion = parseInt(
        prompt(
          "Esa no es una opción valida!!! \n izquierda: 0 \n medio: 1 \n derecha: 2"
        )
      );
    }
    //verificacion de atajada
    inout = comparator(eleccion);
    if (inout === 0) {
      alert("PERO QUE ATAJADON" + "🧤🧤🧤🧤");
    } else {
      alert("gol del rival!" + "😬😬😬😬");
      Equipo2.gol();
    }
    i++;
  }
  if (Equipo1.goles > Equipo2.goles) {
    alert("GANOOOOOOOOO " + Equipo1.nombre + ", Felicitaciones!!!" + "✨✨✨");
  } else {
    alert(
      "GANOOOOOOOOO " +
        Equipo2.nombre +
        ", no pasa nada, sera la proxima" +
        "😔😔😔"
    );
  }
  jugando = prompt("Quieres volver a jugar?(esc para salir)");
}
