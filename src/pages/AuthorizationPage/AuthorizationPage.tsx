import styles from './AuthorizationPage.module.scss';
import { FC } from 'react';
import { AuthorizationForm } from '@features/authorization/components/AuthorizationForm/AuthorizationForm';
import { RegistrationPanel } from '@features/authorization/components/RegistrationPanel/RegistrationPanel';

export const AuthorizationPage: FC = () => {
	return (
		<div className={styles.page}>
			<h1 className={styles.title}>Sign to SN</h1>
			<AuthorizationForm className={styles.form} />
			<RegistrationPanel />
		</div>
	);
};