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
import { ValidationError } from '@features/authorization/components/ValidationError/ValidationError';

interface IAuthorizationForm {
	className?: string;
}

export const AuthorizationForm: FC<IAuthorizationForm> = ({ className }) => {
	const { email, password, isDataValid } = useFormFields();
	const dispatch = useAppDispatch();

	const handleSubmit = useCallback(
		(e: React.FormEvent) => {
			e.preventDefault();

			if (validateEmail(email.value) && validatePassword(password.value)) {
				dispatch(login({ email: email.value, password: password.value }));
				!isDataValid.value && isDataValid.setValue(true);
				console.log({ email: email.value, password: password.value });
			} else {
				isDataValid.value && isDataValid.setValue(false);
				//toast.error('Bad inputs');
			}
		},
		[email.value, password.value]
	);

	const closeErrPanel = useCallback(() => isDataValid.setValue(true), []);

	return (
		<>
			{!isDataValid.value && <ValidationError closePanel={closeErrPanel} />}
			<Panel className={classNames(styles.wrapper, className)}>
				<form onSubmit={handleSubmit}>
					<label className={styles.label} htmlFor={'login_field'}>
						Email address
					</label>
					<Input className={styles.input} size={'size-l'} id={'login_field'} {...email} />

					<label className={styles.label} htmlFor={'password_field'}>
						Password
					</label>
					<PasswordInput
						className={styles.input}
						size={'size-l'}
						id={'password_field'}
						{...password}
					/>

					<Button size={'size-l'} color={'primary'} type={'submit'}>
						Login
					</Button>
				</form>
			</Panel>
		</>
	);
};
