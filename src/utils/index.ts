import { toast } from 'react-toastify';
import { Entry, EntryType, Notification, NotificationType, User } from '@/types';

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

export function getNotificationText(type: NotificationType): string {
	// TODO: refactor with RegExp
	const mapper: Record<NotificationType, string> = {
		like: 'liked',
		repost: 'reposted',
		comment: 'commented',
	};

	return mapper[type] + ' ' + 'your ';
}

export function getFullName<T extends { firstname: string; lastname: string }>({
	firstname,
	lastname,
}: T): string {
	return (
		firstname[0].toUpperCase() +
		firstname.slice(1).toLowerCase() +
		' ' +
		lastname[0].toUpperCase() +
		lastname.slice(1).toLowerCase()
	);
}

export function getEmptyArray(length: number) {
	return new Array(length).fill(0);
}
