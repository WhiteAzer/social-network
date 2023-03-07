import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from './PageLayout.module.scss';
import { Header } from '@components/Header/Header';
import { Main } from '@components/Main/Main';

const PageLayout: FC = () => {
	return (
		<div className={style.wrapper}>
			<Header />
			<Main>
				<Outlet />
			</Main>
			<ToastContainer autoClose={2000} />
		</div>
	);
};
export default PageLayout;
