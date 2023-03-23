import styles from './UserLabel.module.scss';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { getShortName } from '@/utils';
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
					<Avatar size={'size-s'} src={user.avatar.path} />
				</Link>
				<div className={styles.name}>
					<div className={styles.shortname}>{getShortName(user)}</div>
					<div className={styles.username}>{user.username}</div>
				</div>
			</div>
		</Panel>
	);
};

export const SkeletonUserLabel: FC<Pick<Props, 'className'>> = ({ className }) => {
	return (
		<Panel className={className}>
			<div className={styles.label}>
				<SkeletonAvatar size={'size-s'} />
				<span className={styles.name}>
					<SkeletonText className={styles.shortname} />
					<SkeletonText className={styles.username} />
				</span>
			</div>
		</Panel>
	);
};
