import React, { FC, InputHTMLAttributes } from 'react';
import { PropsWithSize } from '../../types';
import classNames from 'classnames';
import styles from './Input.module.scss';

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> &
	PropsWithSize<'size-m' | 'size-l'>

export const Input: FC<Props> = ({ type = 'text', className, size, ...props }) => {
    return (
        <input
            type={type}
            className={classNames(styles.input, styles[`input_${size}`], className)}
            {...props}
        />
    );
};
