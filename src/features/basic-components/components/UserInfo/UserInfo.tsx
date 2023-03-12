import styles from './UserInfo.module.scss';
import classNames from 'classnames';
import { FC } from 'react';
import { PropsWithClass } from '@/types/runtime-types';
import { IUser, IUserInfo } from '@/types/data-types';
import { getFullName } from '@/utils';
import { SkeletonText } from '@features/skeletonui';

type Props = PropsWithClass & {
	user: IUser;
	info: IUserInfo;
};

export const UserInfo: FC<Props> = ({ className, user, info }) => {
	return (
		<div className={styles.info}>
			<h1 className={styles.name}>{getFullName(user)}</h1>
		</div>
	);
};

export const SkeletonUserInfo: FC = () => {
	return (
		<div className={styles.info}>
			<SkeletonText sx={{ width: '50%' }} className={styles.name} lines={1} />
		</div>
	);
};
