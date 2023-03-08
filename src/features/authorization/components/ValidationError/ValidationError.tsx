import styles from './ValidationError.module.scss';
import classNames from 'classnames';
import {FC} from 'react';
import {Icon16Cancel as IconClose} from '@vkontakte/icons';
import { Panel } from '@components/Panel/Panel';


type Props = {
	onClose: () => void;
}

export const ValidationError: FC<Props> = ({ onClose }) => {
	return (
		<Panel className={classNames(styles.wrapper)}>
			<p>Incorrect username or password.</p>
			<div className={styles.close} onClick={onClose}>
				<IconClose />
			</div>
		</Panel>
	);
};