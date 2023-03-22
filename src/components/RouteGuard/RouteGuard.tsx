import { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { authorizedUserSelector } from '@store/slices/userSlice/selectors';
import { useAppSelector } from '@store/hooks/useAppSelector';

export const RouteGuard: FC<PropsWithChildren> = ({ children }) => {
	const { status } = useAppSelector(authorizedUserSelector);
	const flag = localStorage.getItem('authorized');

	if (flag) {
		return status === 'failed' ? <Navigate to={'/login'} /> : <>{children}</>;
	} else {
		return <Navigate to={'/login'} />;
	}
};
