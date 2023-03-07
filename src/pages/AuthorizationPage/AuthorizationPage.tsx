import React, { type FC } from 'react';
import { AuthorizationForm } from '@features/authorization/components/AuthorizationForm/AuthorizationForm';
import styles from './AuthorizationPage.module.scss';

export const AuthorizationPage: FC = () => {
	return <AuthorizationForm />;
};
