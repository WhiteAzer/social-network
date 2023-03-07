import styles from './UserLabel.module.scss';
import React, { FC } from 'react';
import { Avatar, SkeletonAvatar } from '@components/Avatar/Avatar';
import { Panel } from '@components/Panel/Panel';
import { PartialUser, PropsWithClass } from '@/types';
import { Link } from 'react-router-dom';
import { getFullName } from '@/utils';
import { SkeletonText } from '@components/SkeletonText/SkeletonText';

type Props = PropsWithClass & {
	user: PartialUser;
};

export const UserLabel: FC<Props> = ({ user, className }) => {
	return (
		<Panel className={className}>
			<div className={styles.label}>
				<Link to={user.id}>
					<Avatar size={'size-s'} />
				</Link>
				<span>
					{getFullName(user)}
					<br />
					<span className={styles.username}>{user.username}</span>
				</span>
			</div>
		</Panel>
	);
};

export const SkeletonUserLabel: FC<Pick<Props, 'className'>> = ({ className }) => {
	return (
		<Panel className={className}>
			<div className={styles.label}>
				<SkeletonAvatar size={'size-s'} />
				<SkeletonText font={14} lines={2} />
			</div>
		</Panel>
	);
};
