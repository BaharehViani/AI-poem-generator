function generatePoem(event) {
    event.preventDefault();
  
    new Typewriter("#result", {
      strings: "La tombe dit à la rose",
      autoStart: true,
      delay: 1,
      cursor: "",
    });
}
  
let poemForm = document.querySelector("#form");
poemForm.addEventListener("submit", generatePoem);