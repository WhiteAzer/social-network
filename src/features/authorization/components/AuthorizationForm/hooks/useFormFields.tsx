import { useFormField } from './useFormField';
import { useCallback, useState } from 'react';

interface IState {
	login: string;
	password: string;
}

export const useFormFields = (initialState: IState = { login: '', password: '' }) => {
	const [value, setValue] = useState(true);
	const isDataValid = {
		value,
		setValue,
	};

	const email = useFormField(initialState.login);
	const password = useFormField(initialState.password);

	return { email, password, isDataValid };
};
