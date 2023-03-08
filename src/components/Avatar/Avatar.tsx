import styles from './Avatar.module.scss';
import { FC } from 'react';
import classNames from 'classnames';
import { PartialUser, PropsWithClass, PropsWithSize } from '@/types';

type Props = PropsWithSize &
	PropsWithClass & {
		user?: PartialUser;
	};

export const Avatar: FC<Props> = ({ size, className }) => {
	return <div className={classNames(styles.avatar, `avatar_${size}`, className)} />;
};
