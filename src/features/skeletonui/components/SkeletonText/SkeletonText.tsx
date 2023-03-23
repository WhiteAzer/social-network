import styles from './SkeletonText.module.scss';
import { FC } from 'react';
import classNames from 'classnames';
import { SkeletonProps } from '@/types/runtime-types';

type Props = SkeletonProps;

export const SkeletonText: FC<Props> = ({ className, sx }) => {
	return (
		<div id={'skeleton'} className={classNames(styles.text, className)} style={sx}>
			_
		</div>
	);
};
