import styles from './SkeletonText.module.scss';
import React, { FC } from 'react';
import classNames from 'classnames';
import { PropsWithClass } from '@/types';
import { getEmptyArray } from '@/utils';

type Props = PropsWithClass & {
	font: number;
	lines: number;
};

export const SkeletonText: FC<Props> = ({ className, font, lines }) => {
	return (
		<div className={classNames(styles.wrapper, className)}>
			{getEmptyArray(lines || 1).map((_, i) => (
				<div key={i} id={'skeleton'} style={{ fontSize: font }} className={styles.text} />
			))}
		</div>
	);
};
