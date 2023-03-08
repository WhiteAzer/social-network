import styles from './PageLayout.module.scss';
import classNames from 'classnames';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useAppSelector } from '@store/hooks/useAppSelector';
import { authorizedUserSelector } from '@store/user/selectors';
import { NavSection, SkeletonUserLabel, UserLabel } from '@features/basic-components';
import { Header, Main } from '@/components';

export const PageLayout: FC = () => {
	const { user } = useAppSelector(authorizedUserSelector);

	return (
		<>
			<div className={'container'}>
				<Header />
				<Main>
					<div className={classNames(styles.section, styles.left)}>
						{!!user ? <UserLabel user={user} /> : <SkeletonUserLabel />}
						<NavSection />
					</div>
					<div className={classNames(styles.section, styles.middle)}>
						<Outlet />
					</div>
					<div className={classNames(styles.section, styles.right)}></div>
				</Main>
			</div>
			<ToastContainer autoClose={2000} />
		</>
	);
};
