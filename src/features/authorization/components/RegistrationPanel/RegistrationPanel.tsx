import styles from './RegistrationPanel.module.scss';
import classNames from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { PropsWithClass } from '@/types';
import { Panel } from '@/components';

type Props = PropsWithClass;

export const RegistrationPanel: FC<Props> = ({ className }) => {
	return (
		<Panel className={classNames(styles.wrapper, className)}>
			<span>
				New to SN? <Link to={'/signup'}>Create an account.</Link>
			</span>
		</Panel>
	);
};
