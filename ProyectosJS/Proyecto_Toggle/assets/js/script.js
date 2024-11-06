const body = document.querySelector("body");
// getElementById porque en el html se puso como ID
const toggle = document.getElementById("toggle");
// El métpodo toggle() permite que un token existente de la lista y devuelve false y si lo llamo lo pone en true
toggle.addEventListener("click", () => {
    toggle.classList.toggle("toggle_verde");
    body.classList.toggle("toggle_verde");
});