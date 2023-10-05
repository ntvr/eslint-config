const files = require('./files');
const styles = require('./rules/styles');

module.exports = {
	extends: [
		'./.eslintrc',
		'./rules/react',
	],

	settings: {
		// https://www.npmjs.com/package/eslint-import-resolver-node
		'import/resolver': {
			node: {
				extensions: [
					'.web.mjs',
					'.mjs',
					'.web.js',
					'.js',
					'.web.ts',
					'.ts',
					'.web.tsx',
					'.tsx',
					'.json',
					'.web.jsx',
					'.jsx',
				],
			},
		},
	},

	rules: {
		'@typescript-eslint/member-delimiter-style': ['error', {
			multiline: {
				delimiter: 'comma',
				requireLast: true,
			},
			singleline: {
				delimiter: 'comma',
				requireLast: false,
			},
		}],

		'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],
	},

	overrides: [{
		files: files.typescript,

		extends: ['airbnb-typescript'],

		parserOptions: {
			project: './tsconfig.json',
			sourceType: 'module',
			warnOnUnsupportedTypeScriptVersion: true,
		},

		rules: {
			'@typescript-eslint/indent': styles.rules.indent,
			'react/prop-types': 'off',
			'react/require-default-props': 'off',
		},
	}],
};
