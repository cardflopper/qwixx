/**
- generate dice values object containing "color" : 1d6
- call the createcombinations function to get combos to display on page
- update the page
*/

function roll() {
  let colors = ["blue", "green", "red", "yellow"];
  let diceValues = {};
  for (let color of colors) diceValues[color] = rollDie();
  let combos = createCombinations(diceValues);
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

  for (let color of Object.keys(diceValues)) {
    combinations[color] =
      white1 + diceValues[color] + " / " + (white2 + diceValues[color]);
  }

  combinations["white"] = `${white1 + white2}`;
  return combinations;
}

function updatePageElements(combos) {
  for (let color in combos)
    document.getElementById(color).innerHTML = combos[color];
  return;
}
