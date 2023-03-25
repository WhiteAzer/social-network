import styles from './NotFoundPage.module.scss';
import { FC } from 'react';
import { Panel } from '@/components';
import { Link } from 'react-router-dom';

export const NotFoundPage: FC = () => {
	return (
		<div className={styles.page}>
			<Panel className={styles.wrapper}>
				<h1>
					404
					<br />
					Not found
				</h1>

				<p>
					<Link to={'/'}>Back to Home Page</Link>
				</p>
			</Panel>
		</div>
	);
};
