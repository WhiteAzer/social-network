import React, { FC, HTMLAttributes } from 'react';
import { Size } from '../../types';
import styles from './Input.module.scss';
import classNames from 'classnames';

type Props = HTMLAttributes<HTMLInputElement> & {
	size: Extract<Size, 'size-m' | 'size-l'>;
};

export const Input: FC<Props> = ({ size, className, ...props }) => {
	return (
		<input
			className={classNames(styles.input, styles[`input_${size}`], className)}
			{...props}
		/>
	);
};
