/**
 * @fileoverview Exports module:GsDhtml.
 * @copyright Robert Gaines 2020
 * @license Apache-2.0
 * @author Robert Gaines <rob@communitywebservice.com>
 */
 
"use strict";

/**
 * Gulp Swallower plugin providing utility tasks for plugins that build DHTML based websites.
 * DHTML = HTML + CSS + JavaScript
 * Use gs-www as a generic output wrapper for this plugin.
 * Lints (ESLint), bundles (Browserify), minifies (Uglify), maps, and documents JS.
 * Can be extended with Mustache, SASS, SCSS, PHP and other Swallower plugins.
 * @module {Function} GsDhtml
 * @requires module:GulpSwallower
 * @implements {module:GulpSwallower.SwallowerPlugin}
 * @param {GulpSwallower} gulpSwallower Gulp Swallower.
 * @param {object} [templateOptions] Default Swallower task template options.
 * @future Beautify all modules
 * @future Rethink how dest directories are handled.
 * @future Rethink how lib is handled, since it is being processed twice in some cases.
 * @future Automatically test output against browserlist.
 * @future Consider stylelint
 * @future Consider tinyify
 * @future Consider eslint-plugin-compat
 * @future Consider postcss-import
 * @future Consider postcss-preset-env
 * @future Consider cssnano
 * @future Consider gulp-clean-css
 * @future Consider postcss-sass
 * @future Consider gulp-concat-css 
 * @future Consider input/output formats (index|main|bundle) -> (index|main|bundle)
 * @future implement since, version, and require jsDoc tags.
 * @future Document private methods and properties.
 * @future Lint and add jsDoc to child modules.
 * @future Consistent variable and file names. i.e. globSet instead of globs.
 * @future .gitignore is not always working.
 * @future dotFolders excluded by .gitignore are being copied.
 * @future Consider stream-combiner;
 * @future Consider gulp-wrap
 * @future Consider gulp-declare
 * @future Consider gulp-filter
 * @future Consider gulp-autoprefixer
 * @future Change var names to the following pattern: fileType + "Files" | Directories + Src | Dest
 * @future Consider splitting gitignore, linting, jsDoc, and Source Map functionality into core modules.
 * @future Check browserify settings
 * @future Convert ES5 classes to ES6 classes.
 */

module.exports = function GsDhtml(gulpSwallower, templateOptions) {

	var _this = {}; // Private scope.

	_this.gulpSwallower = gulpSwallower;
	_this.templateOptions = typeof templateOptions !== "undefined" ? templateOptions : {};
	_this.namedGlobs = [];

	/**
	 * Run the plugin. Usually called internally by Gulp Swallower.
	 * @method run
	 */

	this.run = function run() {
		_this.loadSettings();
		_this.loadGlobSets();
		_this.addBeeperToGulp();
		_this.addGitignoreToGulp();
		_this.addJsDocToGulp();
		_this.addLintJsToGulp();
		_this.addGenericFileCleanersToGulp();
		_this.addGenericFileCopiersToGulp();
		_this.addBundleToGulp();
		_this.addBuildToGulp();
		_this.addDefaultToGulp();
	};

	/**
	 * Get plugin ID.
	 * @method getId
	 * @returns {string} plugin ID.
	 */

	this.getId = function () {
		return "gs-dhtml";
	};

	/**
	 * Get plugin requirements.
	 * @method getRequirements
	 * @returns {string} plugin ID.
	 */

	this.getRequirements = function () {
		return [];
	};

	_this.loadSettings = function loadSettings() {
		var defaultTemplateOptions = require("./defaultSettings.js");

		_this.templateOptions = Object.assign(defaultTemplateOptions, templateOptions);

		_this.templateOptions.defaultGlobOptions.base = _this.templateOptions.wwwBase;
	}.bind(this);

	_this.loadGlobSets = function loadGlobSets() {
		_this.namedGlobs = require("./namedGlobs.js");

		_this.gulpSwallower.registerNamedGlobSets(_this.namedGlobs);
	}.bind(this);

	// @future Reduce boilerplate, but consider the dangers of loading files from arbitrary strings.
	_this.addBeeperToGulp = function addBeeperToGulp() {
		var taskTemplate = require("./taskTemplates/beep.js");
		var taskDefinitions = require("./taskDefinitions/beep.js");
		var taskDefinitionOptions = _this.templateOptions;
		_this.gulpSwallower.defineTasks(taskTemplate, taskDefinitions, taskDefinitionOptions);
	}.bind(this);

	_this.addGitignoreToGulp = function addGitignoreToGulp() {
		var taskTemplate = require("./taskTemplates/gitignore.js");
		var taskDefinitions = require("./taskDefinitions/gitignore.js");
		var taskDefinitionOptions = _this.templateOptions;
		_this.gulpSwallower.defineTasks(taskTemplate, taskDefinitions, taskDefinitionOptions);
	}.bind(this);

	_this.addJsDocToGulp = function addJsDocToGulp() {
		var taskTemplate = require("./taskTemplates/jsDoc.js");
		var taskDefinitions = require("./taskDefinitions/jsDoc.js");
		var taskDefinitionOptions = _this.templateOptions;
		_this.gulpSwallower.defineTasks(taskTemplate, taskDefinitions, taskDefinitionOptions);
	}.bind(this);

	_this.addLintJsToGulp = function addLintJsToGulp() {
		var taskTemplate = require("./taskTemplates/lintJs.js");
		var taskDefinitions = require("./taskDefinitions/lintJs.js");
		var taskDefinitionOptions = _this.templateOptions;
		_this.gulpSwallower.defineTasks(taskTemplate, taskDefinitions, taskDefinitionOptions);
	}.bind(this);

	_this.addGenericFileCleanersToGulp = function addGenericFileCleanersToGulp() {
		var taskTemplate = require("./taskTemplates/genericFileCleaner.js");
		var taskDefinitions = require("./taskDefinitions/genericFileCleaner.js");
		var taskDefinitionOptions = _this.templateOptions;
		_this.gulpSwallower.defineTasks(taskTemplate, taskDefinitions, taskDefinitionOptions);
	}.bind(this);

	_this.addGenericFileCopiersToGulp = function addGenericFileCopiersToGulp() {
		var taskTemplate = require("./taskTemplates/genericFileCopier.js");
		var taskDefinitions = require("./taskDefinitions/genericFileCopier.js");
		var taskDefinitionOptions = _this.templateOptions;
		_this.gulpSwallower.defineTasks(taskTemplate, taskDefinitions, taskDefinitionOptions);
	}.bind(this);

	_this.addBundleToGulp = function addBundleToGulp() {
		var taskTemplate = require("./taskTemplates/bundleJs.js");
		var taskDefinitions = require("./taskDefinitions/bundleJs.js");
		var taskDefinitionOptions = _this.templateOptions;
		_this.gulpSwallower.defineTasks(taskTemplate, taskDefinitions, taskDefinitionOptions);
	}.bind(this);

	_this.addBuildToGulp = function addBuildToGulp() {
		_this.gulpSwallower.extendTaskSet("buildParallel", "parallel", "lintJs");
		_this.gulpSwallower.extendTaskSet("buildParallel", "parallel", "bundleJs");
		_this.gulpSwallower.extendTaskSet("buildParallel", "parallel", "jsDoc");

		_this.gulpSwallower.extendTaskSet("build", "series", "clean");
		_this.gulpSwallower.extendTaskSet("build", "series", "gitignore");
		_this.gulpSwallower.extendTaskSet("build", "series", "copyStaticAssets");
		_this.gulpSwallower.extendTaskSet("build", "series", "buildParallel");
		_this.gulpSwallower.extendTaskSet("build", "series", "beep");

	}.bind(this);

	_this.addDefaultToGulp = function addDefaultToGulp() {
		_this.gulpSwallower.extendTaskSet("default", "series", "build");
	}.bind(this);

};
