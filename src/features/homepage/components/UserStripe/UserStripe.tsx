import React, { FC } from 'react';
import classNames from 'classnames';
import { Size } from '../../../../types';
import styles from './UserStripe.module.scss';
import { Avatar } from '@components/Avatar/Avatar';
import { Icon24MoreHorizontal as IconMore } from '@vkontakte/icons';

type Props = {
	user: any;
	size: Size;
	className?: string;
};

export const UserStripe: FC<Props> = ({ size, className }) => {
	return (
		<div className={classNames(styles.stripe, styles[`stripe_${size}`], className)}>
			<Avatar className={styles.avatar} size={size} />
			<div className={styles.info}>
				<span className={styles.username}>Emily Wilkins</span>
			</div>
			<button className={styles.button}>
				<IconMore fill={'#c4ccd6'} />
			</button>
		</div>
	);
};
