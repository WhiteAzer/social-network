import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import style from './PageLayout.module.scss'
import { Main } from '../../components/Main/Main'
import { Header } from '../../components/Header/Header'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const PageLayout = () => {
	return (
		<div className={style.wrapper}>
			<Header />
			<Main>
				<Outlet />
			</Main>
			<ToastContainer autoClose={2000} />
		</div>
	)
}
export default PageLayout
