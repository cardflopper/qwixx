let colors = ["blue", "green", "red", "yellow"];

function roll() {
  let diceValues = {};
  for (let color of colors) diceValues[color] = rollDie();
  //console.log(diceValues);
  let combos = createCombinations(diceValues);
  //console.log(combos);
  updatePageElements(combos);
  return;
}

function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

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
  colors.push("white");
  for (let color of colors)
    document.getElementById(color).innerHTML = combos[color];
  return;
}
