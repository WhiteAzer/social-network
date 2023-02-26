import React, { createContext, FC, PropsWithChildren } from 'react';
import { Theme } from '../../types';

type SVGProperties = {
	color: string;
};

type ContextType = { theme: Theme; toggle: () => void; svg: SVGProperties };

const value: ContextType = {
    theme: 'light',
    toggle: () => undefined,
    svg: {
        color: '#AEB6BF',
    },
};

export const ColorContext = createContext<ContextType>(value);

export const ColorProvider: FC<PropsWithChildren> = ({ children }) => {
    return <ColorContext.Provider value={value}>{children}</ColorContext.Provider>;
};
