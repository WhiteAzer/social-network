import styles from './DefaultLayout.module.scss';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Main } from '@components/Main/Main';

export const DefaultLayout = () => {
	return (
		<>
			<Main>
				<Outlet />
			</Main>
			<ToastContainer autoClose={2000} />
		</>
	);
};
