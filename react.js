const files = require('./files');

module.exports = {
	extends: [
		'./.eslintrc',
		'./rules/react',
	],

	parser: 'babel-eslint',

	overrides: [
		{
			files: files.react,
		},
	],
};
