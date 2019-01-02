let colors = ["blue", "green", "red", "yellow"];

/**
- create an array of dice values, one element for each color (enumerated in the "colors" array)
- call the createcombinations function to get combos to display on page
- update the page
*/

function roll() {
  let diceValues = {};
  for (let color of colors) diceValues[color] = rollDie();
  //console.log(diceValues);
  let combos = createCombinations(diceValues);
  //console.log(combos);
  updatePageElements(combos);
  return;
}

/** return 1D6 value*/
function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

/**
 * return array of combinations of white and colored dice
 */
function createCombinations(diceValues) {
  let white1 = rollDie();
  let white2 = rollDie();

  //console.log("w1:" + white1 + ", w2:" + white2);

  let combinations = {};
  for (let color of colors) {
    combinations[color] =
      white1 + diceValues[color] + " / " + (white2 + diceValues[color]);
  }

  combinations["white"] = white1 + white2;
  return combinations;
}

function updatePageElements(combos) {
  let tmpColors = colors;
  tmpColors.push("white");
  for (let color of tmpColors)
    document.getElementById(color).innerHTML = combos[color];
  return;
}
