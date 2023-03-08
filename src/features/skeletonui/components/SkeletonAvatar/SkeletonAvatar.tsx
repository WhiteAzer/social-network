import styles from './SkeletonAvatar.module.scss';
import { FC } from 'react';
import { PropsWithSize, SkeletonProps } from '@/types';
import classNames from 'classnames';

type Props = SkeletonProps & PropsWithSize;

export const SkeletonAvatar: FC<Props> = ({ size, className, sx }) => {
	return (
		<div
			id={'skeleton'}
			className={classNames(styles.avatar, `avatar_${size}`, className)}
			style={sx}
		/>
	);
};
