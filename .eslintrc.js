module.exports = {
	globals: {
		__PATH_PREFIX__: true,
  },
  plugins: [
    'jsx-control-statements',
  ],
	extends: [
		'react-app',
    'airbnb',
    'plugin:jsx-control-statements/recommended',
	],
	rules: {
    'no-tabs': 'off',
    'react/jsx-no-undef': [2, { 'allowGlobals': true }]
	},
}