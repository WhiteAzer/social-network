export function getShortNumber(number: number): string {
	let count = 0;

	while (number / 1000 >= 1) {
		number /= 1000;
		count++;
	}

	return Math.trunc(number) + 'K'.repeat(count);
}
