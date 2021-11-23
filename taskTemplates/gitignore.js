"use strict";

module.exports = function genericFileCopier(globSetGetter, options) {

	var gulp = require("gulp");
	var concat = require("gulp-concat");
	var rename = require("gulp-rename");
	var gitignoreFiles = options.gitignoreFiles;
	var defaultGlobOptions = options.defaultGlobOptions;

	var taskFunction = function () {
		var gitignoreFilesGlobSet = globSetGetter.getGlobSet(gitignoreFiles);

		return gulp.src(gitignoreFilesGlobSet, defaultGlobOptions)
			.pipe(concat(".gitignore"))
			.pipe(gulp.dest("./"))
			.pipe(rename(".npmignore"))
			.pipe(gulp.dest("./"));
	};

	return taskFunction;
};
