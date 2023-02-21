import React, { FC, HTMLAttributes } from 'react';
import { Icon16Search as IconSearch } from '@vkontakte/icons';
import styles from './InputSearch.module.scss';
import { Input } from '@components/Input/Input';
import classNames from 'classnames';

export const InputSearch: FC<HTMLAttributes<HTMLInputElement>> = ({ className, ...props }) => {
	return (
		<div className={classNames(styles.search, className)}>
			<IconSearch fill={'#c4ccd6'} />
			<Input className={styles.input} size={'size-l'} {...props} />
		</div>
	);
};
