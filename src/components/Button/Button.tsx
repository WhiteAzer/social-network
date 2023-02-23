import React, { ButtonHTMLAttributes, FC, useContext } from 'react';
import classNames from 'classnames';
import { Color, PropsWithSize } from '../../types';
import styles from './Button.module.scss';
import { ColorContext } from '../../context/ColorContext/ColorProvider';

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
				styles[`button_${size}`],
				styles[`button_${color}_${theme}`]
			)}
			{...props}
		/>
	);
};
