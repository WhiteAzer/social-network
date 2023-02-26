import { useCallback, useState } from 'react';

export function useDelay<T> (initialValue: T, ms: number) {
	const [state, setState] = useState(initialValue);

	const setValue = useCallback((curr: T, next: T) => {
		setState(curr);
		setTimeout(() => { setState(next); }, ms);
	}, []);

	return [state, setValue] as const;
}
