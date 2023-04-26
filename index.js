let containerEl = document.querySelector(".container");

//removes all grid items
function resetGridEmpty() {
    while(containerEl.firstChild) {
        containerEl.removeChild(containerEl.lastChild);
    }
}

//populates container div with grids of numSides x numSides
function populateContainer(numSides) {
    for(let i = 0; i < (numSides*numSides); i++) {
        let box = document.createElement('div');
        box.classList = "box";
        containerEl.appendChild(box)
    }
}

function hoverOnGrid() {
    let boxDivs = document.querySelectorAll(".box");
    boxDivs.forEach((boxDiv) => {
        boxDiv.addEventListener("mouseover", (e) => {
            console.log("hovering...");
            boxDiv.style.backgroundColor = "pink";
        });
    })
}

//initial grid setup
function gridInit() {
    populateContainer(16);
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

