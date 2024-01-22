const pantalla = document.querySelector(".pantalla");
const memoria = document.querySelector(".memoria");
const botones = document.querySelectorAll(".btn");

const theme = document.querySelector(".switch");
const icon = document.getElementById("icon");
let dark = true;

/* 1 = Dividir / 2 = Multiplicar / 3 = Sumar / 4 = Restar */
let operador = 0;

botones.forEach((btn) => {
  btn.addEventListener("click", () => {
    const boton = btn.textContent;
    switch(btn.id) {
      case "AC":
        pantalla.textContent = 0;
        return;
      case "C":
        if (pantalla.textContent.length === 1) {
          pantalla.textContent = 0;
        } else {
          pantalla.textContent = pantalla.textContent.slice(0, -1);
        }
        return;
      case "dividir":
        moverMemoria(pantalla, memoria);
        operador = "/";
        return;
      case "multiplicar":
        moverMemoria(pantalla, memoria);
        operador = "*";
        return;
      case "suma":
        moverMemoria(pantalla, memoria);
        operador = "+";
        console.log(memoria.textContent)
        return;
      case "resta":
        moverMemoria(pantalla, memoria);
        operador = "-";
        return;
      case "igual":
        pantalla.textContent = eval(memoria.textContent + operador + pantalla.textContent);
        memoria.textContent = 0;
        return;
    }

    if (pantalla.textContent === "0" || pantalla.textContent === "ERROR") {
      pantalla.textContent = boton;
    } else {
      pantalla.textContent += boton;
    }
  });
});

function moverMemoria(pantalla, memoria) {
  memoria.textContent = pantalla.textContent;
  pantalla.textContent = "0"
}

theme.addEventListener("click", () => {
  if (dark) {
    document.body.classList.add("light");
    icon.src = "./img/sol.png"
  } else {
    document.body.classList.remove("light")
    icon.src = "./img/luna.png"
  }
  dark = !dark;
})