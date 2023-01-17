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

// Function to prompt user for password options
function getPasswordOptions() {
	let numChar = parseInt(
		prompt(
			"How many characters would you like your password to have? \n\nPlease input a number between 10 and 64"
		)
	);

	if (isNaN(numChar) || numChar > 64 || numChar < 10) {
		alert(`Please input a number between 10 and 64!`);
		getPasswordOptions();
	} else {
		alert(
			`Please confirm at least one of the following four categories to construct the password from \n\n1. Lowercase (a-z) \n2. Uppercase (A-Z) \n3. Numeric (0-9) \n4. Special (e.g. $ @ % & *)`
		);
	}

	let numLowercase = confirm(
		`1. Would you like lowercase characters (a-z) in your password?`
	);
	let numUppercase = confirm(
		`2. Would you like uppercase characters (A-Z) in your password?`
	);
	let numNumeric = confirm(
		`3. Would you like numeric characters (0-9) in your password?`
	);
	let numSpecialChar = confirm(
		`4. Would you like special characters (e.g. $ @ % & *) in your password?`
	);
}

// Function for getting a random element from an array
function getRandom(arr) {}

// Function to generate password with user input
function generatePassword() {}

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
