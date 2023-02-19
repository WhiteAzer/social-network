import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { Size, Theme } from '../../types';
import styles from './Button.module.scss';

type Props = HTMLAttributes<HTMLButtonElement> & {
	size: Size;
	theme: Theme;
};

export const Button: FC<Props> = ({ theme, size, className, ...props }) => {
	return (
		<button
			className={classNames(
				styles.button,
				styles[`button_${size}`],
				styles[`button_${theme}`]
			)}
			{...props}
		/>
	);
};
