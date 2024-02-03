"use strict";

module.exports = function bundleJs(options) {
	var taskDefinitions = [{
		name: "bundleJs",
		options: {
			minDestDirectories: "minDestDirectories",
			rawDestDirectories: "rawDestDirectories",
			webpackBundle: options.webpackBundle,
			webpackEntries: "webpackEntries",
			scriptDirectories: "scriptDirectories",
			webpackConfig: options.webpackConfig
		}
	}];

	return taskDefinitions;
};
