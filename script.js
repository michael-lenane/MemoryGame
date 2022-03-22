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

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
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

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    const newDiv = document.createElement("div");
    newDiv.classList.add(color);
    newDiv.addEventListener("click", handleCardClick);
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
let selectionArray = [];
let firstCard = selectionArray[0];
let secondCard = selectionArray[1];
let clickable = true;
function handleCardClick(e) {
  if (clickable === true) {
    if (e.target.classList.contains("clicked")) {
      return;
    } else {
      e.target.classList.add("clicked");
      selectionArray.push(e.target);
      e.target.style.backgroundColor = e.target.classList[0];
    }

    if (selectionArray.length > 1) {
      clickable = false;
      firstCard = selectionArray[0];
      secondCard = selectionArray[1];
      if (firstCard.className === secondCard.className) {
        firstCard.style.backgroundColor = firstCard.style.backgroundColor;
        secondCard.style.backgroundColor = secondCard.style.backgroundColor;
        selectionArray.shift();
        selectionArray.shift();
        clickable = true;
      } else {
        firstCard.classList.remove("clicked");
        secondCard.classList.remove("clicked");
        selectionArray.shift();
        selectionArray.shift();
        setTimeout(function () {
          firstCard.style.backgroundColor = "white";
          secondCard.style.backgroundColor = "white";
          clickable = true;
        }, 2000);
      }
    } else {
      firstCard = e.target.classList[0];
    }
  } else {
    return;
  }
}

// when the DOM loads
createDivsForColors(shuffledColors);
