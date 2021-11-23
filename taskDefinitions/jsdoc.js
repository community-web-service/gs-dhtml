"use strict";

module.exports = function jsDoc(options) {
	var taskDefinitions = [{
		name: "jsDoc",
		options: {
			srcFiles: "jsFiles",
			globOptions: options.globOptions,
			jsdocConfig: options.jsdocConfig
		}
	}];

	return taskDefinitions;
};
