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

// colour change function
function colorchange() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  this.style.background = `rgb(${r}, ${g}, ${b})`;
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
