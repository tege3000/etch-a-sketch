let containerEl = document.querySelector(".container");
const gridRainbowBtn = document.querySelector(".gridRainbow");
const gridEraseBtn = document.querySelector(".gridErase");
const defaultColorBtn = document.querySelector(".defaultColor");

const randomRgbColor = () => {
    let r = Math.floor(Math.random() * 256); // Random between 0-255
    let g = Math.floor(Math.random() * 256); // Random between 0-255
    let b = Math.floor(Math.random() * 256); // Random between 0-255
    return 'rgb(' + r + ',' + g + ',' + b + ')';
};

gridEraseBtn.addEventListener("click", (e) => {
    hoverOnGrid("white");
})

defaultColorBtn.addEventListener("click", (e) => {
    hoverOnGrid("#363535");
})

gridRainbowBtn.addEventListener("click", (e) => {
    let boxDivs = document.querySelectorAll(".box");
    boxDivs.forEach((boxDiv) => {
        boxDiv.addEventListener("mouseover", (e) => {
            boxDiv.style.backgroundColor = randomRgbColor();
        });
    })
})

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

function hoverOnGrid(color) {
    let boxDivs = document.querySelectorAll(".box");
    boxDivs.forEach((boxDiv) => {
        boxDiv.addEventListener("mouseover", (e) => {
            console.log("hovering...");
            boxDiv.style.backgroundColor = color;
        });
    })
}

//initial grid setup
function gridInit() {
    let numSides = 16

    populateContainer(numSides);

    hoverOnGrid("#363535");
}

const setUpGridInput = document.querySelector(".setupGridInput");

function setUpGrid(event) {

    let numSides = setUpGridInput.value;
    if(numSides <= 100) {
        resetGridEmpty();
        populateContainer(numSides);
        hoverOnGrid("#363535");
    }
    else {
        alert("Too large, please enter a value smaller than 100");
    }
}

gridInit();

let setupGridBtn = document.querySelector(".setupGrid");
setupGridBtn.addEventListener("click", setUpGrid);

