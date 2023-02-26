import React, { type FC } from 'react';
import { type DefaultProps } from '../../types';
import classNames from 'classnames';
import styles from './Badge.module.scss';

type Props = DefaultProps

export const Badge: FC<Props> = ({ children, className }) => {
	return <div className={classNames(styles.badge, className)}>{children}</div>;
};
