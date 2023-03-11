import styles from './Avatar.module.scss';
import { FC } from 'react';
import classNames from 'classnames';
import { PropsWithClass, PropsWithSize } from '@/types/runtime-types';
import { IUser } from '@/types/data-types';

type Props = PropsWithSize &
	PropsWithClass & {
		user: IUser;
	};

export const Avatar: FC<Props> = ({ size, className, user }) => {
	return (
		<img
			src={user.avatar.path}
			className={classNames(styles.avatar, `avatar_${size}`, className)}
		/>
	);
};
