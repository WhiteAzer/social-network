import styles from './UserStripe.module.scss';
import classNames from 'classnames';
import { FC, useContext } from 'react';
import { Icon24MoreHorizontal as IconMore } from '@vkontakte/icons';
import { Link } from 'react-router-dom';
import { getFullName } from '@/utils';
import { SkeletonAvatar, SkeletonText } from '@features/skeletonui';
import { Avatar } from '@/components';
import { PropsWithClass, PropsWithSize } from '@/types/runtime-types';
import { IUser } from '@/types/data-types';

type Props = PropsWithSize &
	PropsWithClass & {
		user: IUser;
		children?: string;
	};

export const UserStripe: FC<Props> = ({ user, className, size, children }) => {
	return (
		<div className={classNames(styles.stripe, styles[`stripe_${size}`], className)}>
			<Link to={user.id}>
				<Avatar className={styles.avatar} size={size} src={user.avatar.path} />
			</Link>
			<div>
				<span className={styles.info}>
					{getFullName(user)}
					<br />
					<span className={styles.extra}>{children}</span>
				</span>
			</div>
			<button>
				<IconMore />
			</button>
		</div>
	);
};

export const SkeletonUserStripe: FC<Pick<Props, 'className' | 'size'>> = ({ className, size }) => {
	return (
		<div className={classNames(styles.stripe, className)}>
			<SkeletonAvatar size={size} className={styles.avatar} />
			<SkeletonText />
		</div>
	);
};
