import { RootState } from '@/store';

export const authorizedUserSelector = (state: RootState) => state.user.authorized;
