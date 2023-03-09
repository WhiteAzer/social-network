import styles from './DefaultLayout.module.scss';
import { Outlet } from 'react-router-dom';
import { Main } from '@/components';

export const DefaultLayout = () => {
	return (
		<>
			<Main>
				<Outlet />
			</Main>
		</>
	);
};
