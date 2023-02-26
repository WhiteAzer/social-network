import React, { type ButtonHTMLAttributes, type FC, useContext } from 'react';
import classNames from 'classnames';
import { type Color, type PropsWithSize } from '../../types';
import { ColorContext } from '../../context/ColorContext/ColorProvider';
import styles from './Button.module.scss';

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> &
PropsWithSize<'size-s' | 'size-m' | 'size-l'> & {
  color?: Color
}

export const Button: FC<Props> = ({ size, className, color = 'primary', ...props }) => {
    const { theme } = useContext(ColorContext);

    return (
        <button
            className={classNames(
                styles.button,
                styles[`button_${size}`],
                styles[`button_${color}_${theme}`],
                className
            )}
            {...props}
        />
    );
};
