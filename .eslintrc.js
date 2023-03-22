module.exports = {
	env: {
		node: true,
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:jest-dom/recommended',
		'plugin:testing-library/react',
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'jest-dom', 'testing-library'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'no-extra-boolean-cast': 'off',
		'testing-library/no-debugging-utils': 'off',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
