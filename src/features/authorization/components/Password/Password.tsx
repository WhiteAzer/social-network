import styles from './Password.module.scss';
import classNames from 'classnames';
import { ChangeEventHandler, FC } from 'react';
import { Icon12EyeSlashOutline as IconEye } from '@vkontakte/icons';
import { Input } from '@/components';
import { useToggle } from '@hooks/useToggle';
import { PropsWithClass, PropsWithSize } from '@/types/runtime-types';

type Props = PropsWithClass<PropsWithSize<'size-m' | 'size-l'>> & {
	value: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
	id: string;
};

export const Password: FC<Props> = ({ value, onChange, id, size, className }) => {
	const { state, toggle } = useToggle(false);

	return (
		<div className={classNames(styles.wrapper)}>
			<Input
				size={size}
				value={value}
				onChange={onChange}
				id={id}
				type={state ? 'text' : 'password'}
				className={classNames(styles.input, className)}
			/>
			<div className={styles.icon} onMouseDown={toggle} onMouseUp={toggle}>
				<IconEye />
			</div>
		</div>
	);
};
