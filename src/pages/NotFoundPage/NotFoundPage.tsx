import styles from './NotFoundPage.module.scss';
import { FC } from 'react';
import { Panel } from '@/components';

export const NotFoundPage: FC = () => {
	return (
		<div className={styles.page}>
			<Panel>
				<h1>
					404
					<br />
					Not found
				</h1>
			</Panel>
		</div>
	);
};
