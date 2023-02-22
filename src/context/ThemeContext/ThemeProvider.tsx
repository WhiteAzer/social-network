import React, { createContext, FC, PropsWithChildren } from 'react';
import { Theme } from '../../types';

export type ThemeType = { theme: Theme; toggle: () => void };
const value: ThemeType = {
	theme: 'light',
	toggle: () => undefined,
};

export const ThemeContext = createContext<ThemeType>(value);

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
