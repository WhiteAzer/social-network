import styles from './Button.module.scss';
import classNames from 'classnames';
import { ButtonHTMLAttributes, FC } from 'react';
import { PropsWithSize } from '@/types/runtime-types';

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
	PropsWithSize<'size-s' | 'size-m' | 'size-l'>;

export const Button: FC<Props> = ({ size, className, ...props }) => {
	return (
		<button
			data-testid={'button'}
			className={classNames(styles.button, `button_${size}`, className)}
			{...props}
		/>
	);
};
