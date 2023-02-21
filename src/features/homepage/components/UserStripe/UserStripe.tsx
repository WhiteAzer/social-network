import React, { FC } from 'react';
import classNames from 'classnames';
import { IUser, Size } from '../../../../types';
import { Avatar } from '@components/Avatar/Avatar';
import { Icon24MoreHorizontal as IconMore } from '@vkontakte/icons';
import styles from './UserStripe.module.scss';

type Props = {
	user: IUser;
	size: Exclude<Size, 'size-xs'>;
	className?: string;
};

export const UserStripe: FC<Props> = ({ user, size, className }) => {
	return (
		<div className={classNames(styles.stripe, styles[`stripe_${size}`], className)}>
			<Avatar className={styles.avatar} size={size} />
			<div className={styles.info}>
				<span className={styles.user}>{user.name}</span>
			</div>
			<button className={styles.button}>
				<IconMore fill={'#c4ccd6'} />
			</button>
		</div>
	);
};
