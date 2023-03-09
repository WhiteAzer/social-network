import styles from './RegistrationLabel.module.scss';
import classNames from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Panel } from '@/components';
import { joinRoutes } from '@/utils';
import { PropsWithClass } from '@/types/runtime-types';
import { routes } from '@data/constants';

type Props = PropsWithClass;

export const RegistrationLabel: FC<Props> = ({ className }) => {
	return (
		<Panel className={classNames(styles.wrapper, className)}>
			<span>
				New to SN? <Link to={joinRoutes(routes.signup)}>Create an account.</Link>
			</span>
		</Panel>
	);
};
