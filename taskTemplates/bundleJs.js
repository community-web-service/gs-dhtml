"use strict";

module.exports = function bundleJs(globSetGetter, options) {

	// @future Determine if anything should be broken out into extensions or filters.

	var gulp = require("gulp");
	var uglify = require("gulp-uglify");
	var named = require('vinyl-named');
	var sourcemaps = require("gulp-sourcemaps");
	var log = require("fancy-log");
	var multiDest = require("gulp-multi-dest");
	var webpackStream = require("webpack-stream");
	var minDestDirectories = options.minDestDirectories;
	var rawDestDirectories = options.rawDestDirectories;
	var webpackBundle = options.webpackBundle;
	var webpackEntries = options.webpackEntries;
	var scriptDirectories = options.scriptDirectories;
	var webpackConfig = options.webpackConfig;

	var taskFunction = function () {
		var minDestDirectoriesGlobSet = globSetGetter.getGlobSet(minDestDirectories);
		var rawDestDirectoriesGlobSet = globSetGetter.getGlobSet(rawDestDirectories);
		var webpackEntriesGlobSet = globSetGetter.getGlobSet(webpackEntries);
		var scriptDirectoriesGlobSet = globSetGetter.getGlobSet(scriptDirectories);

		var webpackBaseOptions = {
			resolve: {
				modules: scriptDirectoriesGlobSet,
			}
		};

		// @future Preserve certain options that would be overwritten
		var webpackOptions = Object.assign({}, webpackBaseOptions, webpackConfig);

		var bundledStream = gulp.src(webpackEntriesGlobSet)
		.pipe(named())
		.pipe(webpackStream(webpackOptions))
		// @todo Add "babelify" with {presets: ["@babel/preset-env"]}
		// @future Don't hard-code settings.
		// @future Consider .babelrc

		bundledStream.pipe(multiDest(rawDestDirectoriesGlobSet));

		var minStream = bundledStream
			.pipe(sourcemaps.init({
				largeFile: true
			}))
			.pipe(uglify())
			.on("error", log)
			.pipe(sourcemaps.write("./"))
			.pipe(multiDest(minDestDirectoriesGlobSet));

		return minStream;
		
	};

	return taskFunction;
};
