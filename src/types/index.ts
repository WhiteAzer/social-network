export type Size = 'XS' | 'S' | 'M' | 'L';
export type ElementSize<T extends string, S extends Size> = `${Lowercase<T>}_size-${Lowercase<S>}`;
export type ButtonSize = ElementSize<'button', 'S' | 'M' | 'L'>;
export type InputSize = ElementSize<'input', 'M' | 'L'>;
export type AvatarSize = ElementSize<'avatar', Size>;
export type Theme = 'primary' | 'secondary';
