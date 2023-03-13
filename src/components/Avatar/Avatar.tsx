import styles from './Avatar.module.scss';
import { FC } from 'react';
import classNames from 'classnames';
import { PropsWithClass, PropsWithSize } from '@/types/runtime-types';

type Props = PropsWithSize &
	PropsWithClass & {
		path: string;
	};

export const Avatar: FC<Props> = ({ size, className, path }) => {
	return <img src={path} className={classNames(styles.avatar, `avatar_${size}`, className)} />;
};
