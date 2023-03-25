import { cleanup, screen, render } from '@testing-library/react';
import { Input } from '@/components';

describe('Input', () => {
	afterEach(cleanup);

	test('Input;size=m', () => {
		render(<Input size={'size-m'} />);

		expect(screen.getByTestId('input')).toHaveClass('input_size-m');
	});

	test('Input;size=l', () => {
		render(<Input size={'size-l'} />);

		expect(screen.getByTestId('input')).toHaveClass('input_size-l');
	});
});
