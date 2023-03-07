import styles from './UserInfo.module.scss';
import React, { FC } from 'react';
import classNames from 'classnames';
import { Button } from '@components/Button/Button';
import { PropsWithClass, User } from '@/types';
import { UserStats } from '@features/basic-components/components/UserStats/UserStats';
import { UserBadges } from '@features/basic-components/components/UserBadges/UserBadges';

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
