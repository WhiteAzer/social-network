import React, { FC } from 'react';
import styles from './UserCard.module.scss';
import { Panel } from '@components/Panel/Panel';
import { Avatar } from '@components/Avatar/Avatar';
import { UserInfo } from '../UserInfo/UserInfo';
import classNames from 'classnames';
import { PropsWithClass, User } from '@/types';

type Props = PropsWithClass & {
	user: User;
};

export const UserCard: FC<Props> = ({ user, className }) => {
	return (
		<Panel className={classNames(styles.card, className)}>
			<Avatar size={'size-l'} />
			<UserInfo user={user} className={styles.info} />
		</Panel>
	);
};
