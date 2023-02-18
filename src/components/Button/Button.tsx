import React, { FC, HTMLAttributes } from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';
import { ButtonSize, Theme } from '../../types';

type ButtonTheme = `button_${Lowercase<Theme>}`;
type Props = HTMLAttributes<HTMLButtonElement> & {
	size: ButtonSize;
	theme: ButtonTheme;
};

export const Button: FC<Props> = ({ theme, size, className, ...props }) => {
	return (
		<button
			className={classNames(styles.button, styles[size], styles[theme])}
			{...props}
		></button>
	);
};
