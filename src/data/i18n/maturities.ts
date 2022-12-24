/**
 * Get maturity with supporting English and Russian languages
 * @param {number} number number before of word (ex. 1)
 * @param {string[]} text array of messages with 3 strings with maturity (ex. ["минута", "минуты", "минут"])
 * @returns (ex. "минута")
 */
export function getMaturity(number: number, text: string[]) {
	if (text.length !== 3) return "";

	number = Math.abs(number) % 100;
	const decimal = number % 10;

	if (number > 10 && number < 20) return text[2];
	if (decimal > 1 && decimal < 5) return text[1];
	if (decimal == 1) return text[0];

	return text[2];
}
