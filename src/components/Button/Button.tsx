import React, { ButtonHTMLAttributes, FC, useContext } from 'react';
import classNames from 'classnames';
import { ColorType, PropsWithSize, Theme } from '../../types';
import styles from './Button.module.scss';
import { ColorContext } from '../../context/ColorContext/ColorProvider';

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
	PropsWithSize<'size-s' | 'size-m' | 'size-l'> & {
		colorType?: ColorType;
	};

export const Button: FC<Props> = ({ size, className, colorType = 'primary', ...props }) => {
	const { theme } = useContext(ColorContext);

	return (
		<button
			className={classNames(
				styles.button,
				styles[`button_${size}`],
				styles[`button_${colorType}_${theme}`]
			)}
			{...props}
		/>
	);
};
