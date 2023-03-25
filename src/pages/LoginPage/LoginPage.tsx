import styles from './LoginPage.module.scss';
import { FC } from 'react';
import { LoginForm, RegistrationLabel } from '@features/authorization';

export const LoginPage: FC = () => {
	return (
		<div className={styles.page}>
			<h1>Sign to SN</h1>
			<LoginForm />
			<RegistrationLabel />
		</div>
	);
};
