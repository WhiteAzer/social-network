import { Panel } from '@components/Panel/Panel';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './RegistrationPanel.module.scss';
import classNames from 'classnames';

interface IRegistrationPanel {
	className?: string;
}

export const RegistrationPanel: FC<IRegistrationPanel> = ({ className }) => {
	return (
		<Panel className={classNames(styles.wrapper, className)}>
			<p>
				New to SN? <Link to={'/signup'}>Create an account.</Link>{' '}
			</p>
		</Panel>
	);
};
