import styles from './ValidationError.module.scss';
import classNames from 'classnames';
import { FC } from 'react';
import { Icon16Cancel as IconClose } from '@vkontakte/icons';
import { Panel } from '@/components';

type Props = {
	onClose: () => void;
	error: string;
};

export const ValidationError: FC<Props> = ({ onClose, error }) => {
	return (
		<Panel className={classNames(styles.wrapper)}>
			<p>{error}</p>
			<div className={styles.close} onClick={onClose}>
				<IconClose />
			</div>
		</Panel>
	);
};
