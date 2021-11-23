"use strict";

module.exports = function lintJs(options) {
	var taskDefinitions = [{
		name: "lintJs",
		options: {
			srcFiles: "jsFiles",
			globOptions: options.globOptions,
			jshintrc: options.jshintrc,
			jshintReporter: options.jshintReporter
		}
	}];

	return taskDefinitions;
};
