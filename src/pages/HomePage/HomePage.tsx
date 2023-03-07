import styles from './HomePage.module.scss';
import React, { FC } from 'react';
import { Panel } from '@components/Panel/Panel';
import classNames from 'classnames';
import { TitleCounter } from '@features/basic-components/components/TitleCounter/TitleCounter';
import { RequestCard } from '@features/basic-components/components/RequestCard/RequestCard';
import {
	SkeletonUserLabel,
	UserLabel,
} from '@features/basic-components/components/UserLabel/UserLabel';
import { NavSection } from '@features/basic-components/components/NavSection/NavSection';
import { UserCard } from '@features/basic-components/components/UserCard/UserCard';
import {
	SkeletonUserStripe,
	UserStripe,
} from '@features/basic-components/components/UserStripe/UserStripe';
import { notification, user } from '@/data';
import { Photo, Post } from '@/types';
import {
	NotificationCard,
	SkeletonNotificationCard,
} from '@features/basic-components/components/NotificationCard/NotificationCard';
import { SkeletonAvatar } from '@components/Avatar/Avatar';
import { SkeletonText } from '@components/SkeletonText/SkeletonText';
import { SkeletonButton } from '@components/Button/Button';

export const HomePage: FC = () => {
	return (
		<>
			<div className={classNames(styles.section, styles.left)}>
				<UserLabel user={user} />
				<SkeletonUserLabel />
				<NavSection />
				<TitleCounter count={0}>Requests</TitleCounter>
				<RequestCard user={user} />
			</div>
			<div className={classNames(styles.section, styles.middle)}></div>
			<div className={classNames(styles.section, styles.right)}>
				<TitleCounter count={0}>Notifications</TitleCounter>
				<NotificationCard notification={notification} />
				<SkeletonNotificationCard />
				<TitleCounter count={0}>Online</TitleCounter>
				<Panel>
					<UserStripe user={user} size={'size-s'}>
						20 min ago
					</UserStripe>
				</Panel>
				<Panel>
					<SkeletonUserStripe size={'size-s'} />
				</Panel>
			</div>
		</>
	);
};
