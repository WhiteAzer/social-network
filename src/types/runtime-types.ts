import { CSSProperties, PropsWithChildren } from 'react';
import { AnyAction, ThunkAction } from '@reduxjs/toolkit';
import { RootState } from '@/store';

export type DefaultThunkAction = ThunkAction<void, RootState, unknown, AnyAction>;

export type AsyncStatus = 'idle' | 'failed' | 'loading' | 'succeed';

export type AsyncState = {
	status: AsyncStatus;
	error: string | null;
};

export type PropsWithoutClassName<P> = P extends { className?: unknown } ? Omit<P, 'className'> : P;

export type PropsWithoutChildren<P> = P extends { children?: unknown } ? Omit<P, 'children'> : P;

export type DefaultProps<P = unknown> = PropsWithoutChildren<PropsWithoutClassName<P>> &
	PropsWithChildren &
	PropsWithClass;

export type SkeletonProps = PropsWithClass & {
	sx?: CSSProperties;
};

export type PropsWithSize<S extends Size = Size, T = unknown> = T & { size: S };

export type PropsWithClass<T = unknown> = { className?: string } & T;

export type Size = `size-${Lowercase<'XS' | 'S' | 'M' | 'L'>}`;

export type Theme = 'light' | 'dark';

export type Color = 'primary' | 'secondary';
