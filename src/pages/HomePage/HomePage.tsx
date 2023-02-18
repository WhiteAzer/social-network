import React, { FC } from 'react';
import { Header } from '@components/Header/Header';
import { Main } from '@components/Main/Main';
import { UserBadge } from '../../features/homepage/components/UserBadge/UserBadge';
import { NavSection } from '../../features/homepage/components/NavSection/NavSection';
import styles from './HomePage.module.scss';

export const HomePage: FC = () => {
	return (
		<>
			<Header />
			<Main>
				<div className={styles.section}>
					<UserBadge />
					<NavSection />
				</div>
			</Main>
		</>
	);
};
