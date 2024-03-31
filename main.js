// create 16 divs within the main div with the class "grid-div"
let containerDiv = document.querySelector(".container");

function showGrid(userChoice) {
  gridDimension = userChoice;
  for (let i = 0; i < gridDimension * gridDimension; i++) {
    let individualSquare = setGridArea(gridDimension);
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "grid-div");
    newDiv.setAttribute(
      "style",
      `border: 0.5px black solid; width: ${individualSquare}; height: ${individualSquare}; box-sizing: border-box;`
    );
    containerDiv.appendChild(newDiv);
    // add event listener
    newDiv.addEventListener("mouseover", colorchange);
  }
}

function colorchange() {
  // Check if the div already has a color assigned
  if (!this.dataset.colored) {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    let newColor = `rgb(${r}, ${g}, ${b})`;
    this.style.background = newColor;
    // Set a flag to indicate that the div has been colored
    this.dataset.colored = true;
    // Set initial opacity to 10%
    this.style.opacity = 0.1;
  } else {
    // Increase opacity by 10% on each hover
    let currentOpacity = parseFloat(this.style.opacity) || 0.1; // Get current opacity or use 0.1 if not set
    let newOpacity = Math.min(currentOpacity + 0.1, 1); // Increase opacity by 0.1, but cap at 1
    this.style.opacity = newOpacity;
  }
} 

function setGridArea(widthHeight) {
  const containerWidth = containerDiv.clientWidth;
  const squareWidth = containerWidth / widthHeight;
  return `${squareWidth}px`;
}

// set button functionaliy
btn = document.querySelector("#click-me");
btn.addEventListener("click", function () {
  clearGrid();
  showGrid((choice = showPrompt()));
  btn.textContent = "Reset";
});

function showPrompt() {
  let choose = 0;
  while (choose < 2 || choose >= 100) {
    choose = prompt("Choose a grid width between 2 and 100: ");
  }
  return choose;
}

function clearGrid() {
  while (containerDiv.firstChild) {
    containerDiv.removeChild(containerDiv.firstChild);
  }
}
