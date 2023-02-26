import React, { type FC } from 'react';
import { Panel } from '@components/Panel/Panel';
import { Avatar } from '@components/Avatar/Avatar';
import { UserInfo } from '../UserInfo/UserInfo';
import { type PropsWithClass, type User } from '../../../../types';
import classNames from 'classnames';
import styles from './UserCard.module.scss';

type Props = PropsWithClass & {
  user: User
}

export const UserCard: FC<Props> = ({ user, className }) => {
	return (
		<Panel className={classNames(styles.card, className)}>
			<Avatar size={'size-l'} />
			<UserInfo user={user} className={styles.info} />
		</Panel>
	);
};
