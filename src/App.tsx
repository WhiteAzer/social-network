import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { DefaultLayout, PageLayout } from '@/layouts';
import { LoginPage, HomePage, NewsPage, PhotosPage, SettingsPage } from '@/pages';
import { joinRoutes } from '@/utils';
import { routes } from '@data/constants';

export const App: FC = () => {
	return (
		<Routes>
			<Route path={routes.login} element={<DefaultLayout />}>
				<Route index element={<LoginPage />} />
			</Route>
			<Route path={routes.root} element={<PageLayout />}>
				<Route path={routes.home} element={<HomePage />} />
				<Route path={joinRoutes(routes.home, ':userID')} element={<HomePage />} />
				<Route path={routes.news} element={<NewsPage />} />
				<Route path={joinRoutes(routes.photos, ':userID')} element={<PhotosPage />} />
				<Route path={routes.settings} element={<SettingsPage />} />
			</Route>
		</Routes>
	);
};
