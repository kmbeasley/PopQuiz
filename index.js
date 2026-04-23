let score = 0;

//Question 1
const question1Input = promt(`Choose chicken:
    [1] Pizza
    [2] Pasta
    [3] Chicken
    `);

const question1Answer = Number(question1Input);

if (Number.isNaN(question1Answer)) {
  alert("You must enter a number.");
} else if (question1Answer < 1 || question1Answer > 3) {
  alert("Your number must be 1, 2, or 3.");
} else if (question1Answer !== 2) {
  alert("That's not chicken.");
} else {
  alert("That's correct!");
  score += 1;
}

//Question 2
const question2Input = promt(`Choose red:
    [1] Blue
    [2] Red
    [3] Teal
    `);

const question2Answer = Number(question2Input);

if (Number.isNaN(question2Answer)) {
  alert("You must enter a number.");
} else if (question2Answer < 1 || question2Answer > 3) {
  alert("Your number must be 1, 2, or 3.");
} else if (question2Answer !== 2) {
  alert("That's NOT red.");
} else {
  alert("That's correct!");
  score += 1;
}

//Question 3
const question3Input = promt(`Choose Summer:
    [1] Summer
    [2] Winter
    [3] Autumn
    `);

const question3Answer = Number(question3Input);

if (Number.isNaN(question3Answer)) {
  alert("You must enter a number.");
} else if (question3Answer < 1 || question3Answer > 3) {
  alert("Your number must be 1, 2, or 3.");
} else if (question3Answer !== 1) {
  alert("That's not Summer.");
} else {
  alert("That's correct!");
  score += 1;
}

if (score === 0) {
  alert("You got everything incorrect");
} else if (score === 3) {
  alert("You answered everything correctly!");
} else {
  alert("Nice try!");
}
