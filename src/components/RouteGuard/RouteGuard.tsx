import { FC, PropsWithChildren } from 'react';
import { useAppSelector } from '@store/hooks/useAppSelector';
import { authorizedUserSelector } from '@store/slices/userSlice/selectors';
import { Navigate } from 'react-router-dom';

export const RouteGuard: FC<PropsWithChildren> = ({ children }) => {
	const { status } = useAppSelector(authorizedUserSelector);
	const flag = localStorage.getItem('authorized');

	if (flag) {
		return status === 'failed' ? <Navigate to={'/login'} /> : <>{children}</>;
	} else {
		return <Navigate to={'/login'} />;
	}
};
