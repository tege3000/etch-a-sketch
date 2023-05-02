let containerEl = document.querySelector(".container");

//removes all grid items
function resetGridEmpty() {
    while(containerEl.firstChild) {
        containerEl.removeChild(containerEl.lastChild);
    }
}

//determineContainerWidth
function determineContainerWidth(numSides, Q) {
    let factor = 1;
    let widthContainer = 0;

    for(let i = 1; i < 109; i += 10) {
        if(numSides >= i && numSides <= (i+9)) {
            widthContainer = (Q*numSides) + (Q*factor);
            break;
        }
        factor++;
    }

    containerEl.style.width = widthContainer.toString() + "px";
}

//populates container div with grids of numSides x numSides
function populateContainer(numSides) {
    for(let i = 0; i < (numSides*numSides); i++) {
        let box = document.createElement('div');
        box.classList = "box";
        
        containerEl.appendChild(box)
    }

    let Q = document.querySelector(".box").clientWidth;

    determineContainerWidth(numSides, Q);
}

const randomRgbColor = () => {
  let r = Math.floor(Math.random() * 256); // Random between 0-255
  let g = Math.floor(Math.random() * 256); // Random between 0-255
  let b = Math.floor(Math.random() * 256); // Random between 0-255
  return 'rgb(' + r + ',' + g + ',' + b + ')';
};

function hoverOnGrid() {
    let boxDivs = document.querySelectorAll(".box");
    boxDivs.forEach((boxDiv) => {
        boxDiv.addEventListener("mouseover", (e) => {
            console.log("hovering...");
            boxDiv.style.backgroundColor = randomRgbColor();
        });
    })
}

//initial grid setup
function gridInit() {
    let numSides = 16

    populateContainer(numSides);

    hoverOnGrid();
}

function setUpGrid(event) {
    let numSides = prompt("How many sides do you want grid to have?");
    if(numSides <= 100) {
        resetGridEmpty();
        populateContainer(numSides);
        hoverOnGrid();
    }
    else {
        alert("Too large, please enter a value smaller than 100");
    }
}

gridInit();

let setupGridBtn = document.querySelector(".setupGrid");
setupGridBtn.addEventListener("click", setUpGrid);

