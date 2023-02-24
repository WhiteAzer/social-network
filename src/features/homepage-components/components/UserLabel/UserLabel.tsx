import React, { FC } from 'react';
import { Avatar } from '@components/Avatar/Avatar';
import { PropsWithClass, User } from '../../../../types';
import styles from './UserLabel.module.scss';
import { Panel } from '@components/Panel/Panel';

type Props = PropsWithClass & {
	user: User;
};

export const UserLabel: FC<Props> = ({ user, className }) => {
	return (
		<Panel className={className}>
			<div className={styles.label}>
				<Avatar size={'size-s'} />
				<span>
					{user.firstname + ' ' + user.lastname}
					<br />
					<span className={styles.username}>{user.username}</span>
				</span>
			</div>
		</Panel>
	);
};
