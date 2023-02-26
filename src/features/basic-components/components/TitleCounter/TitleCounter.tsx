import React, { FC, PropsWithChildren } from 'react';
import styles from './TitleCounter.module.scss';

type Props = PropsWithChildren & {
	count: number;
};

export const TitleCounter: FC<Props> = ({ children, count }) => {
    return (
        <div className={styles.wrapper}>
            <span>{children}</span>
            {count > 0 && <div className={styles.badge}>{<span>{count}</span>}</div>}
        </div>
    );
};
