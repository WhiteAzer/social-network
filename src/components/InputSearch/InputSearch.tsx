import styles from './InputSearch.module.scss';
import classNames from 'classnames';
import { FC, InputHTMLAttributes, useContext } from 'react';
import { Icon16Search as IconSearch } from '@vkontakte/icons';
import { Input } from '@/components';

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>;

export const InputSearch: FC<Props> = ({ className, ...props }) => {
	return (
		<div className={classNames(styles.search, className)}>
			<IconSearch />
			<Input className={styles.input} size={'size-l'} {...props} />
		</div>
	);
};
