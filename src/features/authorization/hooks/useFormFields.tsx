import { useState } from 'react';
import { useFormField } from '@features/authorization';
import { IUserCredentials } from '@/types/data-types';

export const useFormFields = (initialState: IUserCredentials = { email: '', password: '' }) => {
	const [value, setValue] = useState(true);
	const isDataValid = {
		value,
		setValue,
	};

	const email = useFormField(initialState.email);
	const password = useFormField(initialState.password);

	return { email, password, isDataValid };
};
