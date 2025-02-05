// exercise.run(0)
// exercise.count(100)
// exercise.pushup("well")

// object
// method
// options
// console.log("Okay");

// ✅ Add External ColorKit Library
// Color Kit Library
// https://codepen.io/manikoth/pen/NPKVOxm.js

// Get Stuff

// Set variable for HTML `body` element

// ✅ Check-Check: log out the `body` element in the console

// ✅ Check-Check: get and attach the node for the background color with `.style.backgroundColor`

// Set Stuff

// ✅ Check-Check: assign a background color to "hard code it"
// Hint: Is the color a string, number, or boolean?

// dynamically set backgound color with `colorkit.random()` function/method

// Sparkle effect for funzies
// replace❓ with variable for the `body` element
// colorkit.sparkle( ❓);

console.log(colorkit);

const elBody = document.querySelector("body");

elBody.style.backgroundColor = "yellow";
console.log(elBody.style.backgroundColor);

console.log(colorkit.random());
elBody.style.backgroundColor = colorkit.random();

colorkit.sparkle(elBody);