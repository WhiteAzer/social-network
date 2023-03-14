import styles from './NotFoundPage.module.scss';
import { FC } from 'react';
import { Panel } from '@/components';
import { useSelector } from 'react-redux';
import { authorizedUserSelector } from '../../store/slices/userSlice/selectors';
import { Link, Navigate } from 'react-router-dom';

export const NotFoundPage: FC = () => {
	const { status } = useSelector(authorizedUserSelector);

	if (status !== 'succeed') {
		return <Navigate to={'/auth/login'} />;
	}

	return (
		<div className={styles.page}>
			<Panel className={styles.wrapper}>
				<h1>
					404
					<br />
					Not found
				</h1>

				<p>
					<Link to={'/home'}>Back to Home Page</Link>
				</p>
			</Panel>
		</div>
	);
};
