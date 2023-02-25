import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import style from './MainLayout.module.scss'
import { Main } from '../../components/Main/Main'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const MainLayout = () => {
	return (
		<div className={style.wrapper}>
			<Main>
				<Outlet />
			</Main>
			<ToastContainer autoClose={2000} />
		</div>
	)
}
export default MainLayout
