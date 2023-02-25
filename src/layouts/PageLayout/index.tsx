import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import style from './PageLayout.module.scss';
import { Main } from '../../components/Main/Main';
import { Header } from '../../components/Header/Header';

const PageLayout = () => {
	return (
		<div className={style.wrapper}>
			<Header />
			<Main>
				<Outlet />
			</Main>
		</div>
	);
};
export default PageLayout;
