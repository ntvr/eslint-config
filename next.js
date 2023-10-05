const files = require('./files');
const styles = require('./rules/styles');

module.exports = {
	extends: [
		'./.eslintrc',
		'./rules/react',
		'plugin:@next/next/core-web-vitals',
	],

	parser: 'eslint-config-next/parser',

	parserOptions: {
		allowImportExportEverywhere: true,
		babelOptions: {
			presets: ['next/babel'],
			caller: {
				supportsTopLevelAwait: true,
			},
		},
		requireConfigFile: false,
		sourceType: 'module',
	},

	settings: {
		'import/resolver': {
			'eslint-import-resolver-typescript': {
				alwaysTryTypes: true,
			},
		},
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
			'jsx-a11y/control-has-associated-label': 'off',
		},
	}],
};
