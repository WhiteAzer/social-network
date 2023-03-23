import { cleanup, screen, render } from '@testing-library/react';
import { Button } from '../../Button/Button';

describe('Button', () => {
	afterEach(cleanup);

	test('Button;size=s', () => {
		render(<Button size={'size-s'}>Click</Button>);
		expect(screen.getByRole('button', { hidden: true })).toBeInTheDocument();

		expect(screen.getByTestId('button')).toHaveTextContent('Click');
		expect(screen.getByTestId('button')).toHaveClass('button_size-s');
	});

	test('Button;size=m', () => {
		render(<Button size={'size-m'}>Click</Button>);
		expect(screen.getByRole('button', { hidden: true })).toBeInTheDocument();

		expect(screen.getByTestId('button')).toHaveTextContent('Click');
		expect(screen.getByTestId('button')).toHaveClass('button_size-m');
	});

	test('Button;size=l', () => {
		render(<Button size={'size-l'}>Click</Button>);
		expect(screen.getByRole('button', { hidden: true })).toBeInTheDocument();

		expect(screen.getByTestId('button')).toHaveTextContent('Click');
		expect(screen.getByTestId('button')).toHaveClass('button_size-l');
	});
});
