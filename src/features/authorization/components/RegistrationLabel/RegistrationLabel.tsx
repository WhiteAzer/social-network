import styles from './RegistrationLabel.module.scss';
import classNames from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Panel } from '@/components';
import { PropsWithClass } from '@/types/runtime-types';

type Props = PropsWithClass;

export const RegistrationLabel: FC<Props> = ({ className }) => {
	return (
		<Panel className={classNames(styles.wrapper, className)}>
			<span>
				New to SN? <Link to={'/signup'}>Create an account.</Link>
			</span>
		</Panel>
	);
};
