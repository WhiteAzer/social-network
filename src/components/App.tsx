import React from 'react';
import { FC } from 'react';
import { HomePage } from '../pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { AuthorizationPage } from '../pages/AuthorizationPage/AuthorizationPage';
import PageLayout from '../layouts/PageLayout';

const App: FC = () => {
    return (
        <div className={'container'}>
            <Routes>
                <Route path='auth' element={<MainLayout />}>
                    <Route index element={<AuthorizationPage />} />
                </Route>
                <Route path='' element={<PageLayout />}>
                    <Route index element={<HomePage />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
