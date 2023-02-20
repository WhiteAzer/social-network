import React, { FC } from 'react';
import styles from './TitleCounter.module.scss';

type Props = {
	children: string;
	count: number;
};

export const TitleCounter: FC<Props> = ({ children, count }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>{children}</div>
			{!!count && <div className={styles.badge}>{<span>{count}</span>}</div>}
		</div>
	);
};
