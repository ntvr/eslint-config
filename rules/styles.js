module.exports = {
	rules: {
		// https://eslint.org/docs/rules/no-console
		'no-console': 'warn',

		// https://eslint.org/docs/latest/rules/max-len
		'max-len': [
			'error',
			{
				code: 120,
				tabWidth: 4,
				ignoreUrls: true,
				ignoreComments: false,
				ignoreRegExpLiterals: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
			},
		],

		// https://eslint.org/docs/latest/rules/indent#rule-details
		indent: ['error', 'tab',
			{
				SwitchCase: 1,
				VariableDeclarator: 1,
				outerIIFEBody: 1,
				MemberExpression: 1,
				FunctionDeclaration: {
					parameters: 1,
					body: 1,
				},
				FunctionExpression: {
					parameters: 1,
					body: 1,
				},
				CallExpression: {
					arguments: 1,
				},
			},
		],
	},

};
