import { FC } from 'react';
import styles from './RegistarationPanel.module.scss';
import classNames from 'classnames';

interface RegistarationPanelProps {}

export const RegistarationPanel: FC<RegistarationPanelProps> = ({}) => {
	return <div className={classNames(styles.wrapper)}></div>;
};
