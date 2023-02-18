import React, { FC } from 'react';
import styles from './Header.module.scss';
import { Avatar } from '@components/Avatar/Avatar';

export const Header: FC = () => {
	return (
		<div className={styles.header}>
			<div className={styles.logo_wrapper}>
				<Avatar size={'avatar_size-s'} />
				<h1>Spacepark</h1>
			</div>
		</div>
	);
};
