const months = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'June',
	'July',
	'Aug',
	'Sept',
	'Oct',
	'Nov',
	'Dec',
];

export const getDiff = (diff: number): string => {
	if (diff === 0) return 'now';
	const h = Math.floor(diff / 60);
	if (h) return `${h} hour${h !== 1 ? 's' : ''} ago`;
	else return `${diff} minute${diff !== 1 ? 's' : ''} ago`;
};

const getAmPm = (time: number): string => {
	const date = new Date(time);
	const h = date.getHours();
	const m = date.getMinutes();
	return `${h > 12 ? h - 12 : h}:${m > 9 ? m : '0' + m} ${h > 12 ? 'a' : 'p'}.m.`;
};

export const getTime = (time: number): string => {
	const now = Date.now();
	if (now - time < 24 * 60 * 60 * 1000) return `today at ${getAmPm(time)}`;
	else if (now - time < 48 * 60 * 60 * 1000) return `yesterday at ${getAmPm(time)}`;
	else {
		const date = new Date(time);

		return `${date.getDate()} ${months[date.getMonth()]} at ${getAmPm(time)}`;
	}
};

export const getPostAt = (time: number): string => {
	const date = new Date();
	const postData = new Date(time);

	if (postData.getFullYear() < date.getFullYear())
		return `${postData.getDate()} ${months[postData.getMonth()]} ${postData.getFullYear()}`;

	const diff = Math.floor((date.getTime() - postData.getTime()) / (1000 * 60));
	return diff > 6 * 60 ? getTime(+time) : getDiff(diff);
};
