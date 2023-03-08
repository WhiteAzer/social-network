import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from '@data/constants';
import { DefaultLayout, PageLayout } from '@/layouts';
import { AuthorizationPage, HomePage, NewsPage } from '@/pages';

export const App: FC = () => {
	return (
		<Routes>
			<Route path={routes.auth} element={<DefaultLayout />}>
				<Route index element={<AuthorizationPage />} />
			</Route>
			<Route path={routes.root} element={<PageLayout />}>
				<Route path={routes.home} element={<HomePage />} />
				<Route path={routes.news} element={<NewsPage />} />
			</Route>
		</Routes>
	);
};
