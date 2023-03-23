import { Avatar } from '../Avatar';
import { cleanup, render, screen } from '@testing-library/react';
import { user } from '../../../data';

describe('Avatar', () => {
	afterEach(cleanup);

	test('Avatar;size=xs', () => {
		render(<Avatar size={'size-xs'} src={user.avatar.path} />);

		expect(screen.getByRole('img')).toBeInTheDocument();
		expect(screen.getByTestId('avatar')).toHaveClass('avatar_size-xs');

		cleanup();

		render(<Avatar size={'size-xs'} src={''} />);

		expect(screen.getByTestId('avatar')).toHaveAccessibleName('Avatar');
	});

	test('Avatar;size=s', () => {
		render(<Avatar size={'size-s'} src={user.avatar.path} />);

		expect(screen.getByRole('img')).toBeInTheDocument();
		expect(screen.getByTestId('avatar')).toHaveClass('avatar_size-s');

		cleanup();

		render(<Avatar size={'size-s'} src={''} />);

		expect(screen.getByTestId('avatar')).toHaveAccessibleName('Avatar');
	});

	test('Avatar;size=m', () => {
		render(<Avatar size={'size-m'} src={user.avatar.path} />);

		expect(screen.getByRole('img')).toBeInTheDocument();
		expect(screen.getByTestId('avatar')).toHaveClass('avatar_size-m');

		cleanup();

		render(<Avatar size={'size-m'} src={''} />);

		expect(screen.getByTestId('avatar')).toHaveAccessibleName('Avatar');
	});

	test('Avatar;size=l', () => {
		render(<Avatar size={'size-l'} src={user.avatar.path} />);

		expect(screen.getByRole('img')).toBeInTheDocument();
		expect(screen.getByTestId('avatar')).toHaveClass('avatar_size-l');

		cleanup();

		render(<Avatar size={'size-l'} src={''} />);

		expect(screen.getByTestId('avatar')).toHaveAccessibleName('Avatar');
	});
});
