import styles from './Header.module.scss';
import React, { FC } from 'react';
import { InputSearch } from '@components/InputSearch/InputSearch';

export const Header: FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logo} />
			<InputSearch placeholder={'Search'} />
		</header>
	);
};
