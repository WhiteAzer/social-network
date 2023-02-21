import React, { FC } from 'react';
import { Avatar } from '@components/Avatar/Avatar';
import { user as userdata } from '../../../../data';
import { IUser } from '../../../../types';
import styles from './UserLabel.module.scss';
import { Panel } from '@components/Panel/Panel';

type Props = {
	user: IUser;
	className?: string;
};

export const UserLabel: FC<Props> = ({ user, className }) => {
	return (
		<Panel className={className}>
			<div className={styles.label}>
				<Avatar size={'size-s'} />
				<div className={styles.wrapper}>
					<div className={styles.name}>{user.name}</div>
					<div className={styles.username}>{user.username}</div>
				</div>
			</div>
		</Panel>
	);
};
