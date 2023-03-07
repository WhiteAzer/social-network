import { useFormField } from './useFormField';

interface TState { login: string, password: string }

export const useFormFields = (initialState: TState = { login: '', password: '' }) => {
	const email = useFormField(initialState.login);
	const password = useFormField(initialState.password);

	return { email, password };
};
