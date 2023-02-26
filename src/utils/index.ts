import { toast } from 'react-toastify';

export function handleError(payload) {
	if (Array.isArray(payload)) {
		payload.forEach((errorMessage) => {
			toast.error(errorMessage);
		});
	} else if (typeof payload === 'string') {
		toast.error(payload);
	}
}

export function getShortNumber(number: number): string {
	let count = 0;

	while (number / 1000 >= 1) {
		number /= 1000;
		count++;
	}

	return Math.trunc(number) + 'K'.repeat(count);
}
