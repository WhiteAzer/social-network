import React, { FC } from 'react';
import { Header } from '@components/Header/Header';
import { Main } from '@components/Main/Main';
import { UserLabel } from '../../features/homepage-components/components/UserLabel/UserLabel';
import { NavSection } from '../../features/homepage-components/components/NavSection/NavSection';
import styles from './HomePage.module.scss';
import { TitleCounter } from '../../features/homepage-components/components/TitleCounter/TitleCounter';
import { Panel } from '@components/Panel/Panel';
import { UserStripe } from '../../features/homepage-components/components/UserStripe/UserStripe';
import { user } from '../../data';
import classNames from 'classnames';

export const HomePage: FC = () => {
	return (
		<>
			<Header />
			<Main>
				<div className={styles.section}>
					<UserLabel user={user} />
					<NavSection />
				</div>
				<div className={classNames(styles.section, styles.middle)} />
				<div className={styles.section}>
					<TitleCounter count={0}>Contacts</TitleCounter>
					<Panel>
						<UserStripe user={user} size={'size-s'} />
					</Panel>
				</div>
			</Main>
		</>
	);
};
