"use strict";

module.exports = function genericFileCopier(globSetGetter, options) {

	// @future Determine if anything should be broken out into extensions or filters.

	var uglify = require("gulp-uglify");
	var source = require("vinyl-source-stream");
	var buffer = require("vinyl-buffer");
	var sourcemaps = require("gulp-sourcemaps");
	var log = require("fancy-log");
	var multiDest = require("gulp-multi-dest");
	var browserify = require("browserify");
	var minDestDirectories = options.minDestDirectories;
	var rawDestDirectories = options.rawDestDirectories;
	var browserifyBundle = options.browserifyBundle;
	var browserifyEntries = options.browserifyEntries;
	var scriptDirectories = options.scriptDirectories;
	var browserifyConfig = options.browserifyConfig;

	var taskFunction = function () {
		var minDestDirectoriesGlobSet = globSetGetter.getGlobSet(minDestDirectories);
		var rawDestDirectoriesGlobSet = globSetGetter.getGlobSet(rawDestDirectories);
		var browserifyEntriesGlobSet = globSetGetter.getGlobSet(browserifyEntries);
		var scriptDirectoriesGlobSet = globSetGetter.getGlobSet(scriptDirectories);

		browserifyConfig.entries = browserifyEntriesGlobSet;
		browserifyConfig.paths = scriptDirectoriesGlobSet;

		var bundler = browserify(browserifyConfig);

		// Browserify, Babelify, Map, and Minify JS
		return bundler
			// @todo Uncomment this and provide and option to disable it.
			// @future Don't hard-code settings.
			// @future Consider .babelrc
			// @future Provide an option to create a standard bundle and a compat bundle.
			// .transform("babelify", {presets: ["@babel/preset-env"]})
			.bundle()
			.on("error", log)
			.pipe(source(browserifyBundle))
			.pipe(buffer())
			.pipe(sourcemaps.init({
				loadMaps: true
			}))
			.pipe(multiDest(rawDestDirectoriesGlobSet))
			.pipe(uglify())
			.on("error", log)
			.pipe(sourcemaps.write("./"))
			.pipe(multiDest(minDestDirectoriesGlobSet));
	};

	return taskFunction;
};
