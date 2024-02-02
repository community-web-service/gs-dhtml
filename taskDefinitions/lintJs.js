"use strict";

module.exports = function lintJs(options) {
	var taskDefinitions = [{
		name: "lintJs",
		options: {
			srcFiles: "jsFiles",
			globOptions: options.globOptions,
		}
	}];

	return taskDefinitions;
};
