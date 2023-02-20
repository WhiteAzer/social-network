export type Size = `size-${Lowercase<'XS' | 'S' | 'M' | 'L'>}`;

export type Theme = 'primary' | 'secondary';

export type IUser = {
    name: string,
    username: string
}
