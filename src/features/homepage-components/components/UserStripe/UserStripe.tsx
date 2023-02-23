import React, { FC, useContext } from 'react';
import classNames from 'classnames';
import { User, Size, PropsWithSize, PropsWithClass } from '../../../../types';
import { Avatar } from '@components/Avatar/Avatar';
import { Icon24MoreHorizontal as IconMore } from '@vkontakte/icons';
import styles from './UserStripe.module.scss';
import { ColorContext } from '../../../../context/ColorContext/ColorProvider';

type Props = PropsWithSize<'size-s' | 'size-m' | 'size-l'> &
	PropsWithClass & {
		user: User;
	};

export const UserStripe: FC<Props> = ({ user, className, size }) => {
	const { svg } = useContext(ColorContext);

	return (
		<div className={classNames(styles.stripe, className)}>
			<Avatar className={styles.avatar} size={size} />
			<span className={styles.info}>{user.name}</span>
			<button>
				<IconMore fill={svg.color} />
			</button>
		</div>
	);
};
