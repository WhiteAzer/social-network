import styles from './Header.module.scss';
import { FC } from 'react';
import { InputSearch } from '@components/InputSearch/InputSearch';
import { Button } from '../Button/Button';
import { useAppDispatch } from '../../store/hooks/useAppDispatch';
import { logout } from '../../store/slices/userSlice/thunks';

export const Header: FC = () => {
	const dispatch = useAppDispatch();

	const handleLogout = () => {
		dispatch(logout());
	};
	return (
		<header className={styles.header}>
			<div className={styles.logo} />
			<Button size='size-m' onClick={handleLogout}>
				Logout
			</Button>
			<InputSearch placeholder={'Search'} />
		</header>
	);
};
