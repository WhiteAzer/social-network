import React, { FC } from 'react';
import styles from './Header.module.scss';
import { Avatar } from '@components/Avatar/Avatar';
import { InputSearch } from '@components/InputSearch/InputSearch';

export const Header: FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logo_wrapper} />
			<InputSearch placeholder={'Search'} />
		</header>
	);
};
