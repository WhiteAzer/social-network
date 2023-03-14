import styles from './Main.module.scss';
import { FC, PropsWithChildren } from 'react';

export const Main: FC<PropsWithChildren> = ({ children }) => {
	return <main className={styles.main}>{children}</main>;
};
