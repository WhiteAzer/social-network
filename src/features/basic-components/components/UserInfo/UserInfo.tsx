import styles from './UserInfo.module.scss';
import classNames from 'classnames';
import { FC } from 'react';
import { PropsWithClass, User } from '@/types';
import { UserBadges, UserStats } from '@features/basic-components';
import { Button } from '@/components';

type Props = PropsWithClass & {
	user: User;
};

export const UserInfo: FC<Props> = ({ user, className }) => {
	return (
		<div className={classNames(styles.info, className)}>
			<h1>{user.firstname + ' ' + user.lastname}</h1>
			<UserBadges user={user} />
			<UserStats user={user} />
			<div className={styles.buttons}>
				<Button size={'size-l'}>Message</Button>
				<Button size={'size-l'} color={'secondary'}>
					More
				</Button>
			</div>
		</div>
	);
};
