const files = require('./files');

module.exports = {
	extends: [
		'./.eslintrc',
	],

	parser: 'babel-eslint',

	rules: {
		'react/react-in-jsx-scope': 'off',
	},

	overrides: [
		{
			files: files.javascript,
		},
	],
};
