import styles from './PasswordInput.module.scss';
import { ChangeEventHandler, FC } from 'react';
import classNames from 'classnames';
import { Icon12EyeSlashOutline as IconEye } from '@vkontakte/icons';
import { usePasswordView } from '@features/authorization/components/PasswordInput/hooks/usePasswordView';
import { PropsWithClass, PropsWithSize } from '@/types';
import { Input } from '@/components';

type Props = PropsWithClass<PropsWithSize<'size-m' | 'size-l'>> & {
	value: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
	id: string;
};

export const PasswordInput: FC<Props> = ({ value, onChange, id, size, className }) => {
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
				<IconEye />
			</div>
		</div>
	);
};
