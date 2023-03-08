import styles from './UserCard.module.scss';
import { FC } from 'react';
import classNames from 'classnames';
import { PropsWithClass, User } from '@/types';
import { Avatar, Panel } from '@/components';
import { UserInfo } from '@features/basic-components';

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
