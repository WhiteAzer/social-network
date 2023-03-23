import { FC, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PageLayout } from '@/layouts';
import { LoginPage, HomePage, NewsPage, PhotosPage, SettingsPage, NotFoundPage } from '@/pages';
import { useAppDispatch } from '@store/hooks/useAppDispatch';
import { loginByCookies } from '@store/slices/userSlice/thunks';
import { RouteGuard } from '@/components';

export const App: FC = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(loginByCookies());
	}, []);

	return (
		<Routes>
			<Route
				path='/'
				element={
					<RouteGuard>
						<PageLayout />
					</RouteGuard>
				}
			>
				<Route index element={<Navigate to={'/login'} />} />
				<Route path='home' element={<HomePage />} />
				<Route path='home/:userID' element={<HomePage />} />
				<Route path='news' element={<NewsPage />} />
				<Route path='photos' element={<PhotosPage />} />
				<Route path='photos/:userID' element={<PhotosPage />} />
				<Route path='settings' element={<SettingsPage />} />
			</Route>
			<Route path={'/login'} element={<LoginPage />} />
			<Route path={'/signup'} element={<h1>Hello its sign up page!</h1>} />
			<Route path='*' element={<NotFoundPage />} />
		</Routes>
	);
};
