import React, { FC } from 'react';
import { Size } from '../../types';
import classNames from 'classnames';
import styles from './Avatar.module.scss';

type Props = {
	size: Exclude<Size, 'size-xs'>;
	className?: string;
};

export const Avatar: FC<Props> = ({ size, className }) => {
	return <div className={classNames(styles.avatar, styles[`avatar_${size}`], className)} />;
};
