import styles from './Panel.module.scss';
import React, { FC } from 'react';
import classNames from 'classnames';
import { DefaultProps } from '@/types';

export const Panel: FC<DefaultProps> = ({ children, className }) => {
	return <div className={classNames(styles.panel, className)}>{children}</div>;
};
