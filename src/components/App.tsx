import React from 'react';
import { FC, ReactElement } from 'react';
import { HomePage } from '../pages/HomePage/HomePage';
import { Components } from '@components/Components';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { AuthorizationPage } from '../pages/AuthorizationPage/AuthorizationPage';
import { Main } from './Main/Main';
import PageLayout from '../layouts/PageLayout';

const App: FC = () => {
	return (
		<Routes>
			<Route path='auth' element={<MainLayout />}>
				<Route index element={<AuthorizationPage />} />
			</Route>
			<Route path='' element={<PageLayout />}>
				<Route index element={<HomePage />} />
			</Route>
		</Routes>
	);
};

export default App;
