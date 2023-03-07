import styles from './Badge.module.scss';
import React, { FC } from 'react';
import classNames from 'classnames';
import { DefaultProps } from '@/types';

type Props = DefaultProps;

export const Badge: FC<Props> = ({ children, className }) => {
	return <div className={classNames(styles.badge, className)}>{children}</div>;
};
