import React, { FC } from 'react';
import { AvatarSize } from '../../types';
import classNames from 'classnames';
import styles from './Avatar.module.scss';

type Props = {
	size: AvatarSize;
};

export const Avatar: FC<Props> = ({ size }) => {
	return <div className={classNames(styles.avatar, styles[size])} />;
};
