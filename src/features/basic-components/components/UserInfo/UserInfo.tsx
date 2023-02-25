import React, { FC } from 'react';
import { PropsWithClass, User } from '../../../../types';
import classNames from 'classnames';
import { UserStats } from '../UserStats/UserStats';
import { Button } from '@components/Button/Button';
import { UserBadges } from '../UserBadges/UserBadges';
import styles from './UserInfo.module.scss';

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
