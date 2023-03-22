import { CSSProperties, PropsWithChildren } from 'react';

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

export type Size = `size-${'xs' | 's' | 'm' | 'l'}`;
