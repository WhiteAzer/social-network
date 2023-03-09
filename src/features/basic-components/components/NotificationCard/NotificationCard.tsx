import styles from './NotificationCard.module.scss';
import classNames from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { getFullName, getNotificationText } from '@/utils';
import { Avatar, Button, Panel } from '@/components';
import { SkeletonAvatar, SkeletonButton, SkeletonText } from '@features/skeletonui';
import { PropsWithClass } from '@/types/runtime-types';
import { IUserNotification } from '@/types/data-types';

type Props = PropsWithClass & {
	notification: IUserNotification;
};

export const NotificationCard: FC<Props> = ({ notification: { owner, entry, type } }) => {
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
							{getNotificationText(type)}
							<Link to={entry.id}>{entry.type}</Link>
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
					<SkeletonText lines={2} />
				</div>
			</div>
			<SkeletonButton size={'size-l'} />
		</Panel>
	);
};
