import styles from './Badge.module.scss';
import { FC } from 'react';
import classNames from 'classnames';
import { DefaultProps } from '@/types/runtime-types';

type Props = DefaultProps;

export const Badge: FC<Props> = ({ children, className }) => {
	return <div className={classNames(styles.badge, className)}>{children}</div>;
};
