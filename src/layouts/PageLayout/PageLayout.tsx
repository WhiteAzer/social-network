<<<<<<< Updated upstream
import React, { type FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Main } from '../../components/Main/Main';
import { Header } from '../../components/Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from './PageLayout.module.scss';

const PageLayout: FC = () => {
	return (
		<div className={style.wrapper}>
=======
import styles from './PageLayout.module.scss';
import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from '@components/Header/Header';
import { Main } from '@components/Main/Main';

export const PageLayout: FC = () => {
	return (
		<div className={styles.wrapper}>
>>>>>>> Stashed changes
			<Header />
			<Main>
				<Outlet />
			</Main>
			<ToastContainer autoClose={2000} />
		</div>
	);
};
<<<<<<< Updated upstream
export default PageLayout;
=======
>>>>>>> Stashed changes
