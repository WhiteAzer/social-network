import { useCallback, useState } from 'react';

export function useToggle(initialState: boolean): {
	state: boolean;
	toggle: () => void;
	setTrue: () => void;
	setFalse: () => void;
} {
	const [state, setState] = useState(initialState);

	const toggle = useCallback(() => {
		setState((current) => !current);
	}, []);

	const setTrue = useCallback(() => {
		setState(true);
	}, []);

	const setFalse = useCallback(() => {
		setState(false);
	}, []);

	return { state, toggle, setTrue, setFalse };
}
