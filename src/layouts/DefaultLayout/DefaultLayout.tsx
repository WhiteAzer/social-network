import styles from './DefaultLayout.module.scss';
import { Outlet, useNavigate } from 'react-router-dom';
import { Main } from '@/components';
import { useEffect } from 'react';

export const DefaultLayout = () => {
	return (
		<>
			<Main>
				<Outlet />
			</Main>
		</>
	);
};
