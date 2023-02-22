import React, { FC } from 'react';
import { PropsWithClass, PropsWithSize } from '../../types';
import classNames from 'classnames';
import styles from './Avatar.module.scss';

type Props = PropsWithSize<'size-s' | 'size-m' | 'size-l'> & PropsWithClass;

export const Avatar: FC<Props> = ({ size, className }) => {
	return <div className={classNames(styles.avatar, styles[`avatar_${size}`], className)} />;
};
