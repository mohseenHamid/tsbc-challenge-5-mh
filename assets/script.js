// Array of special characters to be included in password
var specialCharacters = [
	"@",
	"%",
	"+",
	"\\",
	"/",
	"'",
	"!",
	"#",
	"$",
	"^",
	"?",
	":",
	",",
	")",
	"(",
	"}",
	"{",
	"]",
	"[",
	"~",
	"-",
	"_",
	"."
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z"
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z"
];

// Declare variables in global scope for unrestricted reference
let numChar;
let optLowercase;
let optUppercase;
let optNumeric;
let optSpecialChar;

// Function for getting a random element's value from an array
function getRandom(arr) {
	let arrIndex = Math.floor(Math.random() * arr.length);
	return arr[arrIndex];
}

// Shuffle array (inspired by stack)
// src: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
	// Initialise random index variable
	let random = "";

	// Loop through the array length
	for (let currentIndex = 0; currentIndex < array.length; currentIndex++) {
		// Pick a random element
		random = Math.floor(Math.random() * currentIndex);

		// Swap it with the current element
		[array[currentIndex], array[random]] = [array[random], array[currentIndex]];
	}
	return array;
}

// Function to prompt user for password options
function getPasswordOptions() {
	// Prompt user to input # of password characters
	numChar = Number(
		prompt(
			"How many characters would you like your password to have? \n\nPlease input an integer value between 10 and 64"
		)
	);

	// Validating the user input by stating the conditions
	if (isNaN(numChar) || numChar > 64 || numChar < 10) {
		alert(`Please input an integer value between 10 and 64!`);
		// If a non-number or out of range, reset the function
		getPasswordOptions();
		// If a non-integer, reset the function
	} else if (!Number.isInteger(numChar)) {
		alert(
			`Please input an INTEGER value between 10 and 64 - that means no decimal points!`
		);
		getPasswordOptions();
	} else {
		// Requesting the user to confirm character category preferences
		const chooseCategories = function () {
			optLowercase = confirm(
				`1. Would you like lowercase characters (a-z) in your password?`
			);
			optUppercase = confirm(
				`2. Would you like uppercase characters (A-Z) in your password?`
			);
			optNumeric = confirm(
				`3. Would you like numeric characters (0-9) in your password?`
			);
			optSpecialChar = confirm(
				`4. Would you like special characters ($ @ % & *) in your password?`
			);
		};

		// If input is valid, alert the user to the requirement of selecting at least one of the character categories to construct the password from
		alert(
			`Please confirm at least one of the following four categories to construct the password from \n\n1. Lowercase (a-z) \n2. Uppercase (A-Z) \n3. Numeric (0-9) \n4. Special (e.g. $ @ % & *)`
		);
		chooseCategories();

		// Resetting the category selection in the instance all 4 categories are rejected
		while (!optLowercase && !optUppercase && !optNumeric && !optSpecialChar) {
			alert(`You must confirm at least one category!`);
			chooseCategories();
		}
	}
}

// Function to generate password with user input
function generatePassword() {
	// Define arrays
	let secretWord = [];
	let masterCategoryArray = [];
	let charCategoriesChoiceArray = [
		optLowercase,
		optUppercase,
		optNumeric,
		optSpecialChar
	];
	let charCategoriesArray = [
		lowerCasedCharacters,
		upperCasedCharacters,
		numericCharacters,
		specialCharacters
	];
	let count = 0;

	for (let i = 0; i < charCategoriesArray.length; i++) {
		if (charCategoriesChoiceArray[i]) {
			masterCategoryArray = masterCategoryArray.concat(charCategoriesArray[i]);
			count++;
		}
	}

	// Simple maths to determine how many categories were selected + how many characters to take from each category + how many remaining characters are needed
	let numCharPerCategory = Math.floor((numChar * 1) / count);
	let remainChar = numChar - numCharPerCategory * count;

	// Generating the password according to the maths above + selected categories
	if (optLowercase) {
		for (let i = 0; i < numCharPerCategory; i++) {
			secretWord.push(getRandom(lowerCasedCharacters));
		}
	}
	if (optUppercase) {
		for (let i = 0; i < numCharPerCategory; i++) {
			secretWord.push(getRandom(upperCasedCharacters));
		}
	}
	if (optNumeric) {
		for (let i = 0; i < numCharPerCategory; i++) {
			secretWord.push(getRandom(numericCharacters));
		}
	}
	if (optSpecialChar) {
		for (let i = 0; i < numCharPerCategory; i++) {
			secretWord.push(getRandom(specialCharacters));
		}
	}
	if (remainChar > 0) {
		for (let i = 0; i < remainChar; i++) {
			secretWord.push(getRandom(masterCategoryArray));
		}
	}

	// Shuffling the generated password array
	shuffle(secretWord);

	// Joining the array elements to form a single string
	return secretWord.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
	getPasswordOptions();

	var password = generatePassword();

	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
