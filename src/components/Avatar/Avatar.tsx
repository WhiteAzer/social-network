import styles from './Avatar.module.scss';
import classNames from 'classnames';
import { FC } from 'react';
import { PropsWithClass, PropsWithSize } from '@/types/runtime-types';

type Props = PropsWithSize &
	PropsWithClass & {
		src: string;
	};

export const Avatar: FC<Props> = ({ size, className, src }) => {
	return (
		<img
			data-testid={'avatar'}
			src={src}
			className={classNames(styles.avatar, `avatar_${size}`, className)}
		/>
	);
};
