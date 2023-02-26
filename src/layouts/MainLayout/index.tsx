import React from 'react';
import { Outlet } from 'react-router-dom';
import { Main } from '../../components/Main/Main';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from './MainLayout.module.scss';

const MainLayout = () => {
    return (
        <div className={style.wrapper}>
            <Main>
                <Outlet />
            </Main>
            <ToastContainer autoClose={2000} />
        </div>
    );
};
export default MainLayout;
