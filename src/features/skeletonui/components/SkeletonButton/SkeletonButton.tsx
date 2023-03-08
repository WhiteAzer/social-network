import styles from './SkeletonButton.module.scss';
import { FC } from 'react';
import { PropsWithSize, SkeletonProps } from '@/types';
import classNames from 'classnames';

type Props = SkeletonProps & PropsWithSize;

export const SkeletonButton: FC<Props> = ({ className, sx, size }) => {
	return (
		<div
			id={'skeleton'}
			style={sx}
			className={classNames(styles.button, `button_${size}`, className)}
		/>
	);
};
