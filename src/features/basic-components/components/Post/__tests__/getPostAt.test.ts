import { getDiff, getPostAt, getTime } from '../../../utils';

describe('Format post time:', () => {
	test(getDiff.name, () => {
		expect(getDiff(0)).toBe('now');
		expect(getDiff(1)).toBe('1 minute ago');
		expect(getDiff(2)).toBe('2 minutes ago');
		expect(getDiff(59)).toBe('59 minutes ago');
		expect(getDiff(60)).toBe('1 hour ago');
		expect(getDiff(119)).toBe('1 hour ago');
		expect(getDiff(120)).toBe('2 hours ago');
	});

	test(getTime.name, () => {
		let date = new Date();
		let h = date.getHours();
		let m = date.getMinutes();

		expect(getTime(date.getTime())).toBe(
			`today at ${h > 12 ? h - 12 : h}:${m > 9 ? m : '0' + m} ${h > 12 ? 'a' : 'p'}.m.`
		);

		date = new Date(Date.now() - 24 * 1000 * 60 * 60);
		h = date.getHours();
		m = date.getMinutes();

		expect(getTime(date.getTime())).toBe(
			`yesterday at ${h > 12 ? h - 12 : h}:${m > 9 ? m : '0' + m} ${h > 12 ? 'a' : 'p'}.m.`
		);

		date = new Date(2023, 0, 1, 0, 0);
		expect(getTime(date.getTime())).toBe('1 Jan at 0:00 p.m.');
		date = new Date(2022, 11, 1, 13, 30);
		expect(getTime(date.getTime())).toBe('1 Dec at 1:30 a.m.');
		date = new Date(2022, 6, 1, 13, 9);
		expect(getTime(date.getTime())).toBe('1 July at 1:09 a.m.');
	});

	test(getPostAt.name, () => {
		expect(getPostAt(0)).toBe('1 Jan 1970');
		expect(getPostAt(Date.now())).toBe('now');
		expect(getPostAt(Date.now() - 5 * 1000 * 60)).toBe('5 minutes ago');
		expect(getPostAt(Date.now() - 59 * 1000 * 60)).toBe('59 minutes ago');
		expect(getPostAt(Date.now() - 119 * 1000 * 60)).toBe('1 hour ago');

		let date = new Date();
		let h = date.getHours();
		let m = date.getMinutes();

		// expect(getPostAt(date.getTime() - 7 * 1000 * 60 * 60)).toBe(
		// 	`today at ${h - 7 > 12 ? h - 7 - 12 : h}:${m > 9 ? m : '0' + m} ${
		// 		h - 7 > 12 ? 'a' : 'p'
		// 	}.m.`
		// );

		date = new Date(Date.now() - 24 * 1000 * 60 * 60);
		h = date.getHours();
		m = date.getMinutes();

		expect(getTime(date.getTime())).toBe(
			`yesterday at ${h > 12 ? h - 12 : h}:${m > 9 ? m : '0' + m} ${h > 12 ? 'a' : 'p'}.m.`
		);
	});
});
