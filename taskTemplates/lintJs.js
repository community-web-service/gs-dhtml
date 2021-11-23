"use strict";

module.exports = function genericFileCopier(globSetGetter, options) {
	var gulp = require("gulp");
	var jshint = require("gulp-jshint");
	var srcFiles = options.srcFiles;
	var globOptions = options.globOptions;
	var jshintrc = options.jshintrc;
	var jshintReporter = options.jshintReporter;

	var taskFunction = function () {
		var srcFilesGlobSet = globSetGetter.getGlobSet(srcFiles);

		return gulp.src(srcFilesGlobSet, globOptions)
			.pipe(jshint(jshintrc))
			.pipe(jshint.reporter(jshintReporter));
	};

	return taskFunction;
};
