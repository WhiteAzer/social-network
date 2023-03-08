export const validatePassword = (password: string) =>
	String(password)
		.toLowerCase()
		.match(/^[A-Za-z0-9]\w{8,}$/);
