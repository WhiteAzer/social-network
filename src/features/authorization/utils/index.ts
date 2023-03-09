export const validateEmail = (email: string) => {
	const regexp =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	return email.toLowerCase().match(regexp);
};

export const validatePassword = (password: string) => {
	const regexp = /^[A-Za-z0-9]\w{8,}$/;
	return password.toLowerCase().match(regexp);
};
