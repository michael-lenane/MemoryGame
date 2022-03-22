const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple",
];

// shuffle function provided by Springboard
function shuffle(array) {
  let counter = array.length;
  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}

let shuffledColors = shuffle(COLORS);

// createDivsForColors function provided by Springboard
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    const newDiv = document.createElement("div");
    newDiv.classList.add(color);
    newDiv.addEventListener("click", handleCardClick);
    gameContainer.append(newDiv);
  }
}

// My variables here:
let selectionArray = [];
let firstCard = selectionArray[0];
let secondCard = selectionArray[1];
let clickable = true;

//my code here:
function handleCardClick(e) {
  if (clickable === true) {
    if (e.target.classList.contains("clicked")) {
      return;
    } else {
      displayClicked(e);
    }
    if (selectionArray.length > 1) {
      handleSecondClick();
    } else {
      firstCard = e.target.classList[0];
    }
  } else {
    return;
  }
}

//functions used found below
function displayClicked(e) {
  e.target.classList.add("clicked");
  selectionArray.push(e.target);
  e.target.style.backgroundColor = e.target.classList[0];
}

function handleSecondClick() {
  clickable = false;
  firstCard = selectionArray[0];
  secondCard = selectionArray[1];
  if (firstCard.className === secondCard.className) {
    foundMatch();
  } else {
    removeSelectionClasses();
    resetSelectionArray();
  }
}

function foundMatch() {
  firstCard.style.backgroundColor = firstCard.style.backgroundColor;
  secondCard.style.backgroundColor = secondCard.style.backgroundColor;
  selectionArray.shift();
  selectionArray.shift();
  clickable = true;
}

function removeSelectionClasses() {
  firstCard.classList.remove("clicked");
  secondCard.classList.remove("clicked");
}

function resetSelectionArray() {
  selectionArray.shift();
  selectionArray.shift();
  setTimeout(function () {
    firstCard.style.backgroundColor = "white";
    secondCard.style.backgroundColor = "white";
    clickable = true;
  }, 2000);
}

// when DOM loads - springboard function
createDivsForColors(shuffledColors);
