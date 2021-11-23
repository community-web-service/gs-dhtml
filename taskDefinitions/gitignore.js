"use strict";

module.exports = function gitignore(options) {
	var taskDefinitions = [{
		name: "gitignore",
		options: {
			gitignoreFiles: "gitignoreFiles",
			defaultGlobOptions: options.defaultGlobOptions
		}
	}];

	return taskDefinitions;
};
