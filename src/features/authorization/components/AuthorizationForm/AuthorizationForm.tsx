import { Input } from '@components/Input/Input';
import { Button } from '@components/Button/Button';
import React, { BaseSyntheticEvent, type FC, useCallback, useState } from 'react';
import { useFormFields } from './hooks/useFormFields';
import { toast } from 'react-toastify';
import { login } from '@store/user/thunks';
import styles from './AuthorizationForm.module.scss';
import { useAppDispatch } from '@store/hooks/useAppDispatch';
import { PasswordInput } from '@features/authorization/components/PasswordInput/PasswordInput';
import { Panel } from '@components/Panel/Panel';
import classNames from 'classnames';
import { validateEmail } from './helpers/validateEmail';
import { validatePassword } from './helpers/validatePassword';

interface IAuthorizationForm {
	className?: string;
}

export const AuthorizationForm: FC<IAuthorizationForm> = ({ className }) => {
	const formState = useFormFields();
	const dispatch = useAppDispatch();

	const handleSubmit = useCallback(
		(e: React.FormEvent) => {
			e.preventDefault();

			const email = formState.email.value;
			const password = formState.password.value;

			if (validateEmail(email) && validatePassword(password)) {
				dispatch(login({ email, password }));
				console.log({
					email,
					password,
				});
			} else {
				toast.error('Bad inputs');
			}
		},
		[formState.email.value, formState.password.value]
	);

	return (
		<Panel className={classNames(styles.wrapper, className)}>
			<form onSubmit={handleSubmit}>
				<label className={styles.label} htmlFor={'login_field'}>
					Email address
				</label>
				<Input
					className={styles.input}
					size={'size-l'}
					id={'login_field'}
					{...formState.email}
				/>

				<label className={styles.label} htmlFor={'password_field'}>
					Password
				</label>
				<PasswordInput
					className={styles.input}
					size={'size-l'}
					id={'password_field'}
					{...formState.password}
				/>

				<Button size={'size-l'} color={'primary'} type={'submit'}>
					Login
				</Button>
			</form>
		</Panel>
	);
};
