import styles from './SkeletonAvatar.module.scss';
import classNames from 'classnames';
import { FC } from 'react';
import { PropsWithSize, SkeletonProps } from '@/types/runtime-types';

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
