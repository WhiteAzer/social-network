import styles from './SkeletonText.module.scss';
import { FC } from 'react';
import classNames from 'classnames';
import { getEmptyArray } from '@/utils';
import { SkeletonProps } from '@/types/runtime-types';

type Props = SkeletonProps & {
	lines: number;
};

export const SkeletonText: FC<Props> = ({ className, lines, sx }) => {
	return (
		<div
			className={classNames(styles.wrapper, className)}
			style={sx && { ...sx, fontSize: sx.fontSize || 14 }}
		>
			{getEmptyArray(lines || 1).map((_, i) => (
				<div key={i} id={'skeleton'} className={styles.text} />
			))}
		</div>
	);
};
