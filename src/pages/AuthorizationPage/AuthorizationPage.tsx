import styles from './AuthorizationPage.module.scss';
import { FC } from 'react';
import { AuthorizationForm } from '@features/authorization/components/AuthorizationForm/AuthorizationForm';

export const AuthorizationPage: FC = () => {
	return <AuthorizationForm />;
};
