import React, { FC, useContext } from 'react';
import classNames from 'classnames';
import { User, Size, PropsWithSize, PropsWithClass, DefaultProps } from '../../../../types';
import { Avatar } from '@components/Avatar/Avatar';
import { Icon24MoreHorizontal as IconMore } from '@vkontakte/icons';
import styles from './UserStripe.module.scss';
import { ColorContext } from '../../../../context/ColorContext/ColorProvider';

type Props = PropsWithSize &
	PropsWithClass & {
		user: User;
		children?: string;
	};

export const UserStripe: FC<Props> = ({ user, className, size, children }) => {
	const { svg } = useContext(ColorContext);

	return (
		<div className={classNames(styles.stripe, styles[`stripe_${size}`], className)}>
			<Avatar className={styles.avatar} size={size} />
			<div>
				<span className={styles.info}>
					{user.firstname + ' ' + user.lastname}
					<br />
					<span className={styles.extra}>{children}</span>
				</span>
			</div>
			<button>
				<IconMore fill={svg.color} />
			</button>
		</div>
	);
};
