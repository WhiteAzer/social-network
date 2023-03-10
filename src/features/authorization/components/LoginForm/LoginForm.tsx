import styles from './LoginForm.module.scss';
import { FC, FormEvent, useCallback } from 'react';
import classNames from 'classnames';
import { Button, Input, Panel } from '@/components';
import {
	Password,
	useFormFields,
	validateEmail,
	validatePassword,
	ValidationError,
} from '@features/authorization';
import { PropsWithClass } from '@/types/runtime-types';

type Props = PropsWithClass;

export const LoginForm: FC<Props> = ({ className }) => {
	const { email, password, isDataValid } = useFormFields();

	const handleSubmit = useCallback(
		(e: FormEvent) => {
			e.preventDefault();

			if (validateEmail(email.value) && validatePassword(password.value)) {
				!isDataValid.value && isDataValid.setValue(true);
				console.log({ email: email.value, password: password.value });
			} else {
				isDataValid.value && isDataValid.setValue(false);
			}
		},
		[email.value, password.value, isDataValid]
	);

	const onErrorClose = useCallback(() => isDataValid.setValue(true), [isDataValid]);

	return (
		<>
			{!isDataValid.value && <ValidationError onClose={onErrorClose} />}
			<Panel className={classNames(styles.wrapper, className)}>
				<form onSubmit={handleSubmit}>
					<label className={styles.label} htmlFor={'login_field'}>
						Email address
					</label>
					<Input className={styles.input} size={'size-l'} id={'login_field'} {...email} />

					<label className={styles.label} htmlFor={'password_field'}>
						Password
					</label>
					<Password
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
