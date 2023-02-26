import React, {FC} from 'react';
import { Outlet } from 'react-router-dom';
import { Main } from '../../components/Main/Main';
import { Header } from '../../components/Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from './PageLayout.module.scss';

const PageLayout:FC = () => {
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
