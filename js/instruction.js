window.addEventListener("load", klar);

let desease = "Navn på sygdom";
let desease_discr = "Beskrivelse af sygdomme";

function klar() {
  console.log("Loaded");

  document.querySelector("#influenza").addEventListener("click", () => {
    console.log("klikket influenza");
    resetBydel();
    document.querySelector("#frederiksberg").classList.add("selected");
    document.querySelector("#efficiency").textContent = "Influenza";
    document.querySelector("#requirement").textContent =
      "Ikke rigtigt farlige, men meget iriterende";
  });

  document.querySelector("#covid").addEventListener("click", () => {
    console.log("klikket covid");
    resetBydel();
    document.querySelector("#oesterbro").classList.add("selected");
    document.querySelector("#efficiency").textContent = "Covid";
    document.querySelector("#requirement").textContent = "Super spændende";
  });

  document.querySelector("#mundogklovsyge").addEventListener("click", () => {
    resetBydel();
    console.log("klikket mundogklovsyge");
    document.querySelector("#amager").classList.add("selected");
    document.querySelector("#efficiency").textContent = "Mund og klovsyge";
    document.querySelector("#requirement").textContent =
      "Farligt hvis du er en ko";
  });
  document.querySelector("#reset").addEventListener("click", () => {
    resetBydel();
  });
}

function resetBydel() {
  document.querySelector("#frederiksberg").classList.remove("selected");
  document.querySelector("#oesterbro").classList.remove("selected");
  document.querySelector("#amager").classList.remove("selected");

  document.querySelector("#efficiency").textContent = desease;
  document.querySelector("#requirement").textContent = desease_discr;
}
