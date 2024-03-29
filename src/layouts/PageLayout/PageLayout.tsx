import styles from './PageLayout.module.scss';
import classNames from 'classnames';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { NavSection, SkeletonUserLabel, UserLabel } from '@features/basic-components';
import { Header, Main } from '@/components';
import { useAppSelector } from '@store/hooks/useAppSelector';
import { authorizedUserSelector } from '@store/slices/userSlice/selectors';

export const PageLayout: FC = () => {
	const { status, user } = useAppSelector(authorizedUserSelector);

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
