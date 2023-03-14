import styles from './PageLayout.module.scss';
import classNames from 'classnames';
import { FC, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { NavSection, SkeletonUserLabel, UserLabel } from '@features/basic-components';
import { Header, Main } from '@/components';
import { useAppSelector } from '@store/hooks/useAppSelector';
import { authorizedUserSelector } from '@store/slices/userSlice/selectors';
import { useAppDispatch } from '@store/hooks/useAppDispatch';
import { loginByCookies } from '@store/slices/userSlice/thunks';

export const PageLayout: FC = () => {
	const { status, user } = useAppSelector(authorizedUserSelector);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (status === 'idle') {
			dispatch(loginByCookies());
		} else if (status === 'failed') {
			navigate('/login');
		}
	}, [status]);

	return (
		<>
			<div className={'container'}>
				<Header />
				<Main>
					<div className={classNames(styles.section, styles.left)}>
						{status === 'succeed' ? <UserLabel user={user} /> : <SkeletonUserLabel />}
						<NavSection />
					</div>
					<div className={classNames(styles.section, styles.middle)}>
						<Outlet />
					</div>
					<div className={classNames(styles.section, styles.right)}></div>
				</Main>
			</div>
		</>
	);
};
