import styles from './MainLayout.module.scss';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Main } from '@components/Main/Main';

export const MainLayout = () => {
	return (
		<div className={styles.wrapper}>
			<Main>
				<Outlet />
			</Main>
			<ToastContainer autoClose={2000} />
		</div>
	);
};
