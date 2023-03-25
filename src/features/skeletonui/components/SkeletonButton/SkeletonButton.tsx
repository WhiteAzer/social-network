import styles from './SkeletonButton.module.scss';
import classNames from 'classnames';
import { FC } from 'react';
import { PropsWithSize, SkeletonProps } from '@/types/runtime-types';

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
