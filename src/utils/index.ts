import { TNotificationType } from '@/types/data-types';

export function getShortNumber(number: number): string {
	let count = 0;

	while (number / 1000 >= 1) {
		number /= 1000;
		count++;
	}

	return Math.trunc(number) + 'K'.repeat(count);
}

export function getNotificationText(type: TNotificationType): string {
	// TODO: refactor with RegExp
	const mapper: Record<TNotificationType, string> = {
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
	return capitalize(firstname) + ' ' + capitalize(lastname);
}

export function capitalize(line: string) {
	return line[0].toUpperCase() + line.slice(1).toLowerCase();
}

export function getEmptyArray(length: number) {
	return new Array(length).fill(0);
}

export function splitRoute(route: string) {
	const regexp = /[/:]/g;

	return route
		.replace(regexp, ' ')
		.split(' ')
		.filter((v) => !!v);
}

export function joinRoutes(...routes: Array<string>) {
	return '/' + routes.join('/') + '/';
}
