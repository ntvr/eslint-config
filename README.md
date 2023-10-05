# @ntvr/eslint-config

Netvor's shareable collection of configs for [Eslint]:

## Installation

Install custom config:

```bash
yarn add --dev @ntvr/eslint-config
```

Create a config file named `.eslintrc.js`:

## Basic Usage

Apply the config in your Eslint config:

```javascript
module.exports = {
	extends: ['@ntvr/eslint-config/typescript'],
};
```

To see the rules that this config uses, please read the
[main config itself](./.eslintrc.js).

### Optional: Based on the project

```javascript
module.exports = {
	extends: [
		'@ntvr/eslint-config/javascript', 
		'@ntvr/eslint-config/react', 
		'@ntvr/eslint-config/typescript', 
		'@ntvr/eslint-config/next', 
	],
};
```

[Eslint]: https://github.com/eslint/eslint
[Eslint config]: https://github.com/ntvr/eslint-config