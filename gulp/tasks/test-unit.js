'use strict';

import gulp from 'gulp';
import del from 'del';
import { Server } from 'karma';

import path from '../paths';


gulp.task('karma', (cb) => {
	del.sync('test-reports/coverage/');

	const server = new Server({
		configFile: path.test.config.karma,
		browsers: ['PhantomJS'],
		singleRun: true,
		autoWatch: false,
	}, function(exitCode) {
		if(1 === exitCode) {
			return process.exit(1);
		}
		cb();
	});
	server.start();
});

gulp.task('test:unit', ['karma'], () => {
	return process.exit(0);
});