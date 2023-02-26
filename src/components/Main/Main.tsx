import React, { type FC, type PropsWithChildren } from 'react';
import styles from './Main.module.scss';

export const Main: FC<PropsWithChildren> = ({ children }) => {
	return <main className={styles.main}>{children}</main>;
};
