import styles from './Avatar.module.scss';
import React, { type FC } from 'react';
import classNames from 'classnames';
import { PartialUser, PropsWithClass, PropsWithSize } from '@/types';

type Props = PropsWithSize &
	PropsWithClass & {
		user?: PartialUser;
	};

export const Avatar: FC<Props> = ({ size, className }) => {
	return <div className={classNames(styles.avatar, `avatar_${size}`, className)} />;
};

export const SkeletonAvatar: FC<Pick<Props, 'className' | 'size'>> = ({ className, size }) => {
	return (
		<div id={'skeleton'} className={classNames(styles.avatar, `avatar_${size}`, className)} />
	);
};
