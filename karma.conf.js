module.exports = function(config) {
	config.set({
		
		frameworks: ['jspm', 'jasmine'],

		// plugins: [
		// 	'karma-jspm',
		// 	'karma-jasmine',
		// 	'karma-phantomjs-launcher',
		// 	'karma-babel-preprocessor',
		// 	'karma-coverage'
		// ],

		// files: [],

		jspm: {
			config: 'jspm.conf.js',
			loadFiles: ['src/app/app.js', 'src/app/**/*.spec.js'],
			serveFiles: ['src/app/**/*.js']
		},

		proxies: {
			'/src/app/': '/base/src/app/',
			'/jspm_packages/': '/base/jspm_packages/'
		},

		preprocessors: {
			'src/**/*.spec.js': ['babel'],
			'src/**/!(*.spec).js': ['babel', 'coverage']
		},

		babelPreprocessor: {
			options: {
				sourceMap: 'inline'
			}
		},

		reporters: ['dots', 'coverage'],

		coverageReporter: {
			instrumenters: { isparta: require('isparta') },
			instrumenter: {
				'src/**/*.js': 'isparta'
			},
			dir: 'test-reports/coverage/',
			subdir: normalizationBrowserName,
			reporters: [
				{ type: 'text' },
				{ type: 'html' }
			]
		}
	});

	function normalizationBrowserName(browser) {
		return browser.toLowerCase().split(" ")[0];
	}
};