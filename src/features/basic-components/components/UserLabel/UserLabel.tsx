import styles from './UserLabel.module.scss';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { getFullName, getShortName } from '@/utils';
import { Avatar, Panel } from '@/components';
import { SkeletonAvatar, SkeletonText } from '@features/skeletonui';
import { PropsWithClass } from '@/types/runtime-types';
import { IUser } from '@/types/data-types';

type Props = PropsWithClass & {
	user: IUser;
};

export const UserLabel: FC<Props> = ({ user, className }) => {
	return (
		<Panel className={className}>
			<div className={styles.label}>
				<Link to={'/home/' + user.id}>
					<Avatar size={'size-s'} user={user} />
				</Link>
				<span>
					{getShortName(user)}
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
				<SkeletonText lines={2} />
			</div>
		</Panel>
	);
};
