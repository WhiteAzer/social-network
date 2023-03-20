import { Avatar } from '../Avatar';
import { cleanup, render, screen } from '@testing-library/react';
import { user } from '../../../data';

describe(Avatar.displayName, () => {
	beforeEach(cleanup);
	afterEach(cleanup);

	test('Avatar;size=xs', () => {
		render(<Avatar size={'size-xs'} src={user.avatar.path} />);

		expect(screen.getByRole('img')).toBeInTheDocument();
		expect(screen.getByTestId('avatar')).toHaveClass('avatar_size-xs');
	});
});
