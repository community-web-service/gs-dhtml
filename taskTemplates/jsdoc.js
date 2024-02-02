"use strict";

// @future also output jsDoc as MarkDown.
module.exports = function jsDoc(globSetGetter, options) {
	
	// @future Determine if anything should be broken out into extensions or filters.
	var gulp = require("gulp");
	var excludeGitignore = require("gulp-exclude-gitignore");
	var jsDoc = require("gulp-jsdoc3");
	var jsDocConfig = options.jsDocConfig;
	var srcFiles = options.srcFiles;
	var globOptions = options.globOptions;

	var taskFunction = function (jsDocCb) {
		var srcFilesGlobSet = globSetGetter.getGlobSet(srcFiles);

		return gulp.src(srcFilesGlobSet, globOptions)
			.pipe(excludeGitignore())
			.pipe(jsDoc(jsDocConfig, jsDocCb));
	};

	return taskFunction;
};
