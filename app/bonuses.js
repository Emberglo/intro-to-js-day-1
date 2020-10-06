//Given the string "team number 2", transform and return the string in camelCase
let str = 'team number 2';

function camelCase(str) {
	let splitStr = str.split(' ');

	if (splitStr.length == 1) {
		return str;
	} else {
		let word1 = splitStr[0];
		let word2 = splitStr[1];
		let number = splitStr[2];

		let firstLetterWord2 = word2.slice(0, 1).toUpperCase();
		let otherLettersWord2 = word2.slice(1, word2.length).toLowerCase();
		let wholeWord2 = firstLetterWord2 + otherLettersWord2;

		let camel = word1 + wholeWord2 + number;

		return camel;
	}
}
