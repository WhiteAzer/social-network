import styles from './Badge.module.scss';
import classNames from 'classnames';
import { FC } from 'react';
import { DefaultProps } from '@/types/runtime-types';

type Props = DefaultProps;

export const Badge: FC<Props> = ({ children, className }) => {
	return <div className={classNames(styles.badge, className)}>{children}</div>;
};

export const SkeletonBadge: FC = () => {
	return <div id={'skeleton'} className={styles.badge} />;
};
