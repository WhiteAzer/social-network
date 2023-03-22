import styles from './Input.module.scss';
import classNames from 'classnames';
import { FC, InputHTMLAttributes } from 'react';
import { PropsWithSize } from '@/types/runtime-types';

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> &
	PropsWithSize<'size-m' | 'size-l'>;

export const Input: FC<Props> = ({ type = 'text', className, size, ...props }) => {
	return (
		<input
			data-testid={'input'}
			type={type}
			className={classNames(styles.input, `input_${size}`, className)}
			{...props}
		/>
	);
};
