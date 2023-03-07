import styles from './NotificationCard.module.scss';
import { Panel } from '@components/Panel/Panel';
import { PropsWithClass, UserNotification } from '@/types';
import React, { FC } from 'react';
import { Button, SkeletonButton } from '@components/Button/Button';
import { Avatar, SkeletonAvatar } from '@components/Avatar/Avatar';
import { Link } from 'react-router-dom';
import { getFullName, getNotificationText } from '@/utils';
import { notification } from '@/data';
import { SkeletonText } from '@components/SkeletonText/SkeletonText';
import classNames from 'classnames';

type Props = PropsWithClass & {
	notification: UserNotification;
};

export const NotificationCard: FC<Props> = ({
	notification: { owner, id, receiver, entry, type },
}) => {
	return (
		<Panel className={styles.panel}>
			<div className={styles.info}>
				<Link to={owner.id}>
					<Avatar size={'size-s'} />
				</Link>
				<div className={styles.content}>
					<div className={styles.wrapper}>
						<span className={styles.owner}>{getFullName(owner)}</span>
						<br />
						<span className={styles.text}>
							{getNotificationText(notification.type)}
							<Link to={notification.entry.id}>{entry.type}</Link>
						</span>
					</div>
				</div>
			</div>
			<Button size={'size-l'}>Hide</Button>
		</Panel>
	);
};

export const SkeletonNotificationCard: FC<Pick<Props, 'className'>> = ({ className }) => {
	return (
		<Panel className={classNames(styles.panel, className)}>
			<div className={styles.info}>
				<SkeletonAvatar size={'size-s'} />
				<div className={styles.content}>
					<SkeletonText font={14} lines={2} />
				</div>
			</div>
			<SkeletonButton size={'size-l'} />
		</Panel>
	);
};
