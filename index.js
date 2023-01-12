// Iteration 1: Names and Input

let hacker1 = "Brenno";
console.log(`The driver'name is ${hacker1}`);

let hacker2 = "Caroline";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

// 3.1
let finalName = "";

for (let i = 0; i < hacker1.length; i++) {
  finalName += hacker1[i].toUpperCase() + " ";
}

console.log(finalName);

// 3.2
let finalName2 = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  finalName2 += hacker2[i];
}

console.log(finalName2);

// 3.3
let orderNames = hacker1.localeCompare(hacker2);

if (orderNames === -1) {
  console.log("The drivers name goes first.");
} else if (orderNames === 1) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}
