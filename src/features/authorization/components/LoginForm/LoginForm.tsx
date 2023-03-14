import styles from './LoginForm.module.scss';
import { FC, FormEvent, useCallback, useEffect } from 'react';
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
import { useAppDispatch } from '@store/hooks/useAppDispatch';
import { loginByCredentials } from '@store/slices/userSlice/thunks';
import { useAppSelector } from '@store/hooks/useAppSelector';
import { authorizedUserSelector } from '@store/slices/userSlice/selectors';
import { useNavigate } from 'react-router-dom';

type Props = PropsWithClass;

export const LoginForm: FC<Props> = ({ className }) => {
	const { email, password, isDataValid } = useFormFields();
	const dispatch = useAppDispatch();
	const { status } = useAppSelector(authorizedUserSelector);
	const navigate = useNavigate();

	useEffect(() => {
		if (status === 'succeed') {
			navigate('/home');
		}
	}, [status]);

	const handleSubmit = useCallback(
		(e: FormEvent) => {
			e.preventDefault();
			dispatch(loginByCredentials({ email: email.value, password: password.value }));

			// if (validateEmail(email.value) && validatePassword(password.value)) {
			// 	!isDataValid.value && isDataValid.setValue(true);
			// 	dispatch(loginByCredentials({ email: email.value, password: password.value }));
			// } else {
			// 	isDataValid.value && isDataValid.setValue(false);
			// }
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

					<Button
						disabled={status === 'loading'}
						size={'size-l'}
						color={'primary'}
						type={'submit'}
					>
						{status === 'loading' ? 'Loading...' : 'Login'}
					</Button>
				</form>
			</Panel>
		</>
	);
};
