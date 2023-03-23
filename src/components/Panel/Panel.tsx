import styles from './Panel.module.scss';
import classNames from 'classnames';
import { FC } from 'react';
import { DefaultProps } from '@/types/runtime-types';

export const Panel: FC<DefaultProps> = ({ children, className }) => {
	return <div className={classNames(styles.panel, className)}>{children}</div>;
};
