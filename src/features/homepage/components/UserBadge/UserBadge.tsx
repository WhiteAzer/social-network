import React, { FC } from 'react';
import styles from './UserBadge.module.scss';
import { Panel } from '@components/Panel/Panel';
import { Avatar } from '@components/Avatar/Avatar';

type Props = {
	user?: any;
};

export const UserBadge: FC<Props> = ({ user }) => {
	return (
		<Panel>
			<div className={styles.badge}>
				<Avatar size={'avatar_size-s'} />
				<div className={styles.info}>
					<div className={styles.name}>Alica Newman</div>
					<div className={styles.username}>@alicanewman</div>
				</div>
			</div>
		</Panel>
	);
};
