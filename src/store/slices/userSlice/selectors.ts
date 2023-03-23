import { RootState } from '@/store';

export const authorizedUserSelector = (state: RootState) => state.user.authorized;

export const currentUserSelector = (state: RootState) => state.user.current;
