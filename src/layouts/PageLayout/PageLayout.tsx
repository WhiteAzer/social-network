import styles from './PageLayout.module.scss';
import classNames from 'classnames';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { NavSection, SkeletonUserLabel } from '@features/basic-components';
import { Header, Main } from '@/components';

export const PageLayout: FC = () => {
	return (
		<>
			<div className={'container'}>
				<Header />
				<Main>
					<div className={classNames(styles.section, styles.left)}>
						<SkeletonUserLabel />
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
