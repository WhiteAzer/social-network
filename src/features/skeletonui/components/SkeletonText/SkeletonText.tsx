import styles from './SkeletonText.module.scss';
import { FC } from 'react';
import classNames from 'classnames';
import { SkeletonProps } from '@/types';
import { getEmptyArray } from '@/utils';

type Props = SkeletonProps & {
	lines: number;
};

export const SkeletonText: FC<Props> = ({ className, lines, sx }) => {
	return (
		<div className={classNames(styles.wrapper, className)}>
			{getEmptyArray(lines || 1).map((_, i) => (
				<div
					key={i}
					id={'skeleton'}
					style={sx && { ...sx, fontSize: sx.fontSize || 14 }}
					className={styles.text}
				/>
			))}
		</div>
	);
};
