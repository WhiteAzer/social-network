import React, { type FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '@pages/HomePage/HomePage';
import { AuthorizationPage } from '@pages/AuthorizationPage/AuthorizationPage';
import { PageLayout } from '@layouts/PageLayout/PageLayout';
import { MainLayout } from '@layouts/MainLayout/MainLayout';

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
