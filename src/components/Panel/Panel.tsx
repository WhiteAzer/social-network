import React, { FC, PropsWithChildren } from 'react';
import styles from './Panel.module.scss';
import classNames from 'classnames';

type Props = {
	className?: string;
} & PropsWithChildren;

export const Panel: FC<Props> = ({ children, className }) => {
	return <div className={classNames(styles.panel, className)}>{children}</div>;
};
