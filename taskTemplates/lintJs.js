"use strict";

// @future Provide configuration options for ESLint
module.exports = function lintJs(globSetGetter, options) {
	var gulp = require("gulp");
	var gulpESLintNew = require("gulp-eslint-new");
	var srcFiles = options.srcFiles;
	var globOptions = options.globOptions;

	var taskFunction = function () {
		var srcFilesGlobSet = globSetGetter.getGlobSet(srcFiles);

		return gulp.src(srcFilesGlobSet, globOptions)
			.pipe(gulpESLintNew())
			.pipe(gulpESLintNew.format())
			.pipe(gulpESLintNew.failAfterError());
	};

	return taskFunction;
};
