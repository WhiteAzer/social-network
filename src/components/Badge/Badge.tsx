import React, { FC } from 'react';
import { DefaultProps } from '../../types';
import classNames from 'classnames';
import styles from './Badge.module.scss';

export const Badge: FC<DefaultProps> = ({ children, className }) => {
    return <div className={classNames(styles.badge, className)}>{children}</div>;
};
