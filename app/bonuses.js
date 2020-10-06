//Given the string "team number 2", transform and return the string in camelCase
let str = 'team number 2';

function camelCase(str) {
	let splitStr = str.split(' ');

	console.log('splitStr', splitStr);

	if (splitStr.length == 1) {
		return str;
	} else {
		let word1 = splitStr[0];

		console.log('Word1', word1);

		let word2 = splitStr[1];

		console.log('Word2', word2);

		let number = splitStr[2];

		console.log('Number', number);

		let firstLetterWord2 = word2.slice(0, 1).toUpperCase();

		console.log('firstLetterWord2', firstLetterWord2);

		let otherLettersWord2 = word2.slice(1, word2.length).toLowerCase();

		console.log('otherLettersWord2', otherLettersWord2);

		let wholeWord2 = firstLetterWord2 + otherLettersWord2;

		console.log('WholeWord2', wholeWord2);

		let camel = word1 + wholeWord2 + number;

		console.log(camel);

		return camel;
	}
}
