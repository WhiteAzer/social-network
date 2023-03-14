import styles from './Header.module.scss';
import { FC } from 'react';
import { InputSearch } from '@components/InputSearch/InputSearch';
import { Button } from '../Button/Button';
import { useAppDispatch } from '../../store/hooks/useAppDispatch';
import { logout } from '../../store/slices/userSlice/thunks';
import { useAppSelector } from '../../store/hooks/useAppSelector';
import { authorizedUserSelector } from '../../store/slices/userSlice/selectors';

export const Header: FC = () => {
	const { status } = useAppSelector(authorizedUserSelector);
	const dispatch = useAppDispatch();

	const handleLogout = () => {
		dispatch(logout());
	};
	return (
		<header className={styles.header}>
			<div className={styles.logo} />
			<Button disabled={status === 'loading'} size='size-m' onClick={handleLogout}>
				{status === 'loading' ? 'Loading...' : 'Logout'}
			</Button>
			<InputSearch placeholder={'Search'} />
		</header>
	);
};
