"use strict";

module.exports = function jsDoc(options) {
	var taskDefinitions = [{
		name: "jsDoc",
		options: {
			srcFiles: "jsFiles",
			globOptions: options.globOptions,
			jsDocConfig: options.jsDocConfig
		}
	}];

	return taskDefinitions;
};
