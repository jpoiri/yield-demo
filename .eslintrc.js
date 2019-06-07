module.exports = {
	root: true,
	extends: ['ember-mx'],
	rules: {
		'prefer-template': 0,
		// Controllers
		'ember/alias-model-in-controller': 'off',
		// General
		'ember/jquery-ember-run': 'off',
		// Components
		'ember/avoid-leaking-state-in-components': [2, ['propTypes']],
		// Disabled - There are way too much Ember standard properties to add - To be re-investigated later
		'ember/avoid-leaking-state-in-ember-objects': 'off',
		// https://eslint.org/docs/rules/no-return-await
		'no-return-await': 'error'
	},
	overrides: [
		// node files
		{
			files: ['testem.js', 'ember-cli-build.js', 'config/**/*.js'],
			parserOptions: {
				sourceType: 'script',
				ecmaVersion: 2015
			},
			env: {
				browser: false,
				node: true
			},
			rules: {
				strict: 0
			}
		},

		// test files
		{
			files: ['tests/**/*.js'],
			excludedFiles: ['tests/dummy/**/*.js'],
			env: {
				embertest: true
			},
			rules: {}
		}
	]
};
