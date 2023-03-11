import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { DefaultLayout, PageLayout } from '@/layouts';
import { LoginPage, HomePage, NewsPage, PhotosPage, SettingsPage } from '@/pages';

export const App: FC = () => {
	return (
		<Routes>
			<Route path={'/'} element={<Navigate to={'/login'} />} />
			<Route path={'/login'} element={<DefaultLayout />}>
				<Route index element={<LoginPage />} />
			</Route>
			<Route path={'/signup'} element={<DefaultLayout />}>
				<Route index element={<h1>Hello!</h1>} />
			</Route>
			<Route path={'/home'} element={<PageLayout />}>
				<Route index element={<HomePage />} />
				<Route path={'/home/:userID'} element={<HomePage />} />
			</Route>
			<Route path={'/news'} element={<PageLayout />}>
				<Route index element={<NewsPage />} />
			</Route>
			<Route path={'/photos'} element={<PageLayout />}>
				<Route index element={<PhotosPage />} />
				<Route path={'/photos/:userID'} element={<PhotosPage />} />
			</Route>
			<Route path={'/settings'} element={<PageLayout />}>
				<Route index element={<SettingsPage />} />
			</Route>
		</Routes>
	);
};
