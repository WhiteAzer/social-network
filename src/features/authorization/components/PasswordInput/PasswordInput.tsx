import React, { BaseSyntheticEvent, FC, useCallback, useState } from 'react';
import styles from './PasswordInput.module.scss';
import classNames from 'classnames';
import { Input } from '@components/Input/Input';
import { Icon12EyeSlashOutline as PasswordIcon } from '@vkontakte/icons';
import { usePasswordView } from '@features/authorization/components/PasswordInput/hooks/usePasswordView';
import { PropsWithSize } from '@/types';

interface IPasswordInputProps {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	id: string;
	size: 'size-m' | 'size-l';
	className: string;
}

const iconSize = 16;
export const PasswordInput: FC<IPasswordInputProps> = ({
	value,
	onChange,
	id,
	size,
	className,
}) => {
	const { isPasswordShowed, toggleIsPasswordView } = usePasswordView();

	return (
		<div className={classNames(styles.wrapper)}>
			<Input
				size={size}
				value={value}
				onChange={onChange}
				id={id}
				type={isPasswordShowed ? 'text' : 'password'}
				className={classNames(styles.input, className)}
			/>

			<div
				className={styles.icon}
				onMouseDown={toggleIsPasswordView}
				onMouseUp={toggleIsPasswordView}
			>
				<PasswordIcon width={iconSize} height={iconSize} />
			</div>
		</div>
	);
};
