"use strict";

module.exports = function lintJs(globSetGetter, options) {
	var gulp = require("gulp");
	var gulpESLintNew = require("gulp-eslint-new");
	var srcFiles = options.srcFiles;
	var globOptions = options.globOptions;
	var esLintConfig = options.esLintConfig;

	var taskFunction = function () {
		var srcFilesGlobSet = globSetGetter.getGlobSet(srcFiles);

		return gulp.src(srcFilesGlobSet, globOptions)
			.pipe(gulpESLintNew(esLintConfig))
			.pipe(gulpESLintNew.format());
	};

	return taskFunction;
};
