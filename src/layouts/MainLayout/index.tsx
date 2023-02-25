import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import style from './MainLayout.module.scss';
import { Main } from '../../components/Main/Main';

const MainLayout = () => {
	return (
		<div className={style.wrapper}>
			<Main>
				<Outlet />
			</Main>
		</div>
	);
};
export default MainLayout;
