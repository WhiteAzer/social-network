import React, { FC, useState } from 'react';
import styles from './TitleBadge.module.scss';

type Props = {
	children: string;
};

export const TitleBadge: FC<Props> = ({ children }) => {
	const [state, setState] = useState<number>(0);

	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>{children}</div>
			{!!state && <div className={styles.badge}>{<span>{state}</span>}</div>}
		</div>
	);
};
