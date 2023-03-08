import styles from './ValidationError.module.scss';
import React, { type FC } from 'react';
import classNames from 'classnames';
import { Icon12Cancel as CloseIcon } from '@vkontakte/icons';
import { Panel } from '@components/Panel/Panel';

const CloseSize = 15;

interface IProps {
	closePanel: () => void;
}

export const ValidationError: FC<IProps> = ({ closePanel }) => {
	return (
		<Panel className={classNames(styles.wrapper)}>
			<p>Incorrect username or password.</p>
			<div className={styles.close} onClick={closePanel}>
				<CloseIcon width={CloseSize} height={CloseSize} />
			</div>
		</Panel>
	);
};
