import React, { FC, InputHTMLAttributes, useContext } from 'react';
import { Icon16Search as IconSearch } from '@vkontakte/icons';
import { Input } from '@components/Input/Input';
import { ColorContext } from '../../context/ColorContext/ColorProvider';
import classNames from 'classnames';
import styles from './InputSearch.module.scss';

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>;

export const InputSearch: FC<Props> = ({ className, ...props }) => {
	const { svg } = useContext(ColorContext);

	return (
		<div className={classNames(styles.search, className)}>
			<IconSearch fill={svg.color} />
			<Input className={styles.input} size={'size-l'} {...props} />
		</div>
	);
};
