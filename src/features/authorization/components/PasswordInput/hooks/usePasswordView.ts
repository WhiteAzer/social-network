import { useCallback, useState } from 'react';

interface IUsePasswordView {
	isPasswordShowed: boolean;
	toggleIsPasswordView: (prev: boolean) => boolean;
}

export const usePasswordView = (initial = false) => {
	const [isPasswordShowed, setIsPasswordShowed] = useState(initial);
	const toggleIsPasswordView = useCallback(() => setIsPasswordShowed((prev) => !prev), []);

	return { isPasswordShowed, toggleIsPasswordView };
};
