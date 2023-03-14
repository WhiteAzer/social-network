import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { DefaultLayout, PageLayout } from '@/layouts';
import { LoginPage, HomePage, NewsPage, PhotosPage, SettingsPage } from '@/pages';
import { AuthorizationLayout } from './layouts/AuthorizationLayout';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

export const App: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<AuthorizationLayout />}>
				<Route path='/' element={<PageLayout />}>
					<Route path='home' element={<HomePage />} />
					<Route path='home/:userID' element={<HomePage />} />
					<Route path='news' element={<NewsPage />} />
					<Route path='photos' element={<PhotosPage />} />
					<Route path='photos/:userID' element={<PhotosPage />} />
					<Route path='settings' element={<SettingsPage />} />
				</Route>

				<Route element={<DefaultLayout />}>
					<Route path={'auth/login'} element={<LoginPage />} />
					<Route path={'auth/signup'} element={<h1>Hello its sign up page!</h1>} />
				</Route>
			</Route>

			<Route path='*' element={<NotFoundPage />} />
		</Routes>
	);
};
