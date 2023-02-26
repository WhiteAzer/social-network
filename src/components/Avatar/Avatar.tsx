import React, { type FC } from 'react';
import { type PropsWithClass, type PropsWithSize } from '../../types';
import classNames from 'classnames';
import styles from './Avatar.module.scss';

type Props = PropsWithSize & PropsWithClass

export const Avatar: FC<Props> = ({ size, className }) => {
	return <div className={classNames(styles.avatar, styles[`avatar_${size}`], className)} />;
};
