import styles from './Button.module.scss';
import { ButtonHTMLAttributes, FC, useContext } from 'react';
import classNames from 'classnames';
import { ColorContext } from '@context/ColorContext/ColorProvider';
import { Color, PropsWithSize } from '@/types';

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> &
	PropsWithSize<'size-s' | 'size-m' | 'size-l'> & {
		color?: Color;
	};

export const Button: FC<Props> = ({ size, className, color = 'primary', ...props }) => {
	const { theme } = useContext(ColorContext);

	return (
		<button
			className={classNames(
				styles.button,
				`button_${size}`,
				styles[`button_${color}_${theme}`],
				className
			)}
			{...props}
		/>
	);
};
