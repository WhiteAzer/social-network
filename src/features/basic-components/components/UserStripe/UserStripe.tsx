import styles from './UserStripe.module.scss';
import React, { type FC, useContext } from 'react';
import classNames from 'classnames';
import { Avatar, SkeletonAvatar } from '@components/Avatar/Avatar';
import { Icon24MoreHorizontal as IconMore } from '@vkontakte/icons';
import { PartialUser, PropsWithClass, PropsWithSize } from '@/types';
import { ColorContext } from '@context/ColorContext/ColorProvider';
import { Link } from 'react-router-dom';
import { getFullName } from '@/utils';
import { SkeletonButton } from '@components/Button/Button';
import { SkeletonText } from '@components/SkeletonText/SkeletonText';

type Props = PropsWithSize &
	PropsWithClass & {
		user: PartialUser;
		children?: string;
	};

export const UserStripe: FC<Props> = ({ user, className, size, children }) => {
	const { svg } = useContext(ColorContext);

	return (
		<div className={classNames(styles.stripe, styles[`stripe_${size}`], className)}>
			<Link to={user.id}>
				<Avatar className={styles.avatar} size={size} />
			</Link>
			<div>
				<span className={styles.info}>
					{getFullName(user)}
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

export const SkeletonUserStripe: FC<Pick<Props, 'className' | 'size'>> = ({ className, size }) => {
	return (
		<div className={classNames(styles.stripe, className)}>
			<SkeletonAvatar size={size} className={styles.avatar} />
			<SkeletonText font={14} lines={2} />
		</div>
	);
};
