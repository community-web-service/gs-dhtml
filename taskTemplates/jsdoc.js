"use strict";

// @future also output jsDoc as MarkDown.
module.exports = function genericFileCopier(globSetGetter, options) {
	
	// @future Determine if anything should be broken out into extensions or filters.
	var gulp = require("gulp");
	var excludeGitignore = require("gulp-exclude-gitignore");
	var jsdoc = require("gulp-jsdoc3");
	var jsdocConfig = options.jsdocConfig;
	var srcFiles = options.srcFiles;
	var globOptions = options.globOptions;

	var taskFunction = function (jsdocCb) {
		var srcFilesGlobSet = globSetGetter.getGlobSet(srcFiles);

		return gulp.src(srcFilesGlobSet, globOptions)
			.pipe(excludeGitignore())
			.pipe(jsdoc(jsdocConfig, jsdocCb));
	};

	return taskFunction;
};
