import { PropsWithChildren } from 'react';

export type Size = `size-${Lowercase<'XS' | 'S' | 'M' | 'L'>}`;

export type Theme = 'light' | 'dark';

export type ColorType = 'primary' | 'secondary';

export type IUser = {
	name: string;
	username: string;
};

export type PropsWithoutClassName<P> = P extends { className?: unknown } ? Omit<P, 'className'> : P;

export type PropsWithoutChildren<P> = P extends { children?: unknown } ? Omit<P, 'children'> : P;

export type DefaultProps<P = unknown> = PropsWithoutChildren<PropsWithoutClassName<P>> &
	PropsWithChildren &
	PropsWithClass;

export type PropsWithSize<S extends Size, T = unknown> = T & { size: S };

export type PropsWithClass<T = unknown> = { className?: string } & T;
