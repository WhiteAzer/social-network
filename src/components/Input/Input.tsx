import styles from './Input.module.scss';
import classNames from 'classnames';
import React, { FC, InputHTMLAttributes } from 'react';
import { PropsWithSize } from '@/types';

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> &
	PropsWithSize<'size-m' | 'size-l'>;

export const Input: FC<Props> = ({ type = 'text', className, size, ...props }) => {
	return (
		<input
			type={type}
			className={classNames(styles.input, styles[`input_${size}`], className)}
			{...props}
		/>
	);
};
