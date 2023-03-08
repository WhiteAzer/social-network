import { Input } from '@components/Input/Input';
import { Button } from '@components/Button/Button';
import { FC, useCallback, FormEvent, useEffect } from 'react';
import { useFormFields } from '../../hooks/useFormFields';
import { toast } from 'react-toastify';
import { login, register } from '@store/user/thunks';
import styles from './AuthorizationForm.module.scss';
import { useAppDispatch } from '@store/hooks/useAppDispatch';
import { useAppSelector } from '@store/hooks/useAppSelector';
import { authorizedUserSelector } from '@store/user/selectors';
import { useNavigate } from 'react-router-dom';
import { routes } from '@data/constants';
import { splitRoute } from '@/utils';

export const AuthorizationForm: FC = () => {
	const navigate = useNavigate();
	const { status, user } = useAppSelector(authorizedUserSelector);
	const formState = useFormFields();
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (status === 'succeed') {
			navigate('/' + splitRoute(routes.home)[0] + '/' + user.id);
		}
	}, [status]);

	const handleSubmit = useCallback(
		(e: FormEvent) => {
			e.preventDefault();

			const email = formState.email.value;
			const password = formState.password.value;

			if (email && password) {
				dispatch(login({ email, password }));
			} else {
				toast.error('Bad inputs');
			}
		},
		[formState.email.value, formState.password.value]
	);

	return (
		<>
			<div className={styles.wrapper}>
				<form onSubmit={handleSubmit}>
					<label htmlFor={'login_field'}>Email address</label>
					<Input size={'size-l'} id={'login_field'} {...formState.email} />

					<label htmlFor={'password_field'}>Password</label>
					<Input size={'size-l'} id={'password_field'} {...formState.password} />

					<Button size={'size-l'} color={'primary'}>
						Login
					</Button>
				</form>
			</div>
		</>
	);
};
