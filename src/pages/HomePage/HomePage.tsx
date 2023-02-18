import React, { FC } from 'react';
import { Header } from '@components/Header/Header';
import { Main } from '@components/Main/Main';
import { UserBadge } from '../../features/homepage/components/UserBadge/UserBadge';
import { NavSection } from '../../features/homepage/components/NavSection/NavSection';
import styles from './HomePage.module.scss';
import { TitleBadge } from '../../features/homepage/components/TitleBadge/TitleBadge';
import { Panel } from '@components/Panel/Panel';
import { UserStripe } from '../../features/homepage/components/UserStripe/UserStripe';
import classNames from 'classnames';

export const HomePage: FC = () => {
	return (
		<>
			<Header />
			<Main>
				<div className={styles.section}>
					<UserBadge />
					<NavSection />
				</div>
				<div className={classNames(styles.section, styles.middle_section)}></div>
				<div className={styles.section}>
					<TitleBadge>Contacts</TitleBadge>
					<Panel>
						<UserStripe user={undefined} size={'size-s'} />
					</Panel>
				</div>
			</Main>
		</>
	);
};
