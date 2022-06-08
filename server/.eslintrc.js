module.exports = {
	'env': {
		'browser': true,
		'commonjs': true,
		'es6': true
	},
	'parserOptions': {
		'ecmaVersion': 2017
	},
	'extends': 'eslint:recommended',
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		]
	}
}
