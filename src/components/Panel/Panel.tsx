import React, { type FC } from 'react';
import classNames from 'classnames';
import { type DefaultProps } from '../../types';
import styles from './Panel.module.scss';

export const Panel: FC<DefaultProps> = ({ children, className }) => {
	return <div className={classNames(styles.panel, className)}>{children}</div>;
};
