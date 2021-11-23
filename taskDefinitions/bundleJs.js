"use strict";

module.exports = function bundleJs(options) {
	var taskDefinitions = [{
		name: "bundleJs",
		options: {
			minDestDirectories: "minDestDirectories",
			rawDestDirectories: "rawDestDirectories",
			browserifyBundle: options.browserifyBundle,
			browserifyEntries: "browserifyEntries",
			scriptDirectories: "scriptDirectories",
			browserifyConfig: options.browserifyConfig
		}
	}];

	return taskDefinitions;
};
