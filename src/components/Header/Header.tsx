import styles from './Header.module.scss';
import { FC } from 'react';
import { InputSearch } from '@/components';

export const Header: FC = () => {
	return (
		<header className={styles.header}>
			<InputSearch placeholder={'Search'} />
		</header>
	);
};
