"use strict";

module.exports = function genericFileCleaner(options) {
	var taskDefinitions = [
		// @future Consider reducing scope of rootAssetFiles since it duplicates functionality.
		{
			name: "cleanStaticAssets",
			options: {
				srcFiles: "staticAssetFiles",
				globOptions: options.defaultGlobOptions
			}
		},
		{
			name: "cleanSrcRoot",
			options: {
				srcFiles: "srcRootDestFiles",
				globOptions: options.defaultGlobOptions
			}
		},
		{
			name: "cleanCss",
			options: {
				srcFiles: "cssDestFiles",
				globOptions: options.defaultGlobOptions
			}
		},
		{
			name: "cleanImg",
			options: {
				srcFiles: "imgDestFiles",
				globOptions: options.defaultGlobOptions
			}
		},
		{
			name: "cleanFont",
			options: {
				srcFiles: "fontDestFiles",
				globOptions: options.defaultGlobOptions
			}
		},
		{
			name: "cleanAudio",
			options: {
				srcFiles: "audioDestFiles",
				globOptions: options.defaultGlobOptions
			}
		},
		{
			name: "cleanLib",
			options: {
				srcFiles: "libDestFiles",
				globOptions: options.defaultGlobOptions
			}
		},
		{
			name: "cleanHtml",
			options: {
				srcFiles: "htmlDestFiles",
				globOptions: options.defaultGlobOptions
			}
		},
		{
			name: "cleanJs",
			options: {
				srcFiles: "jsDestFiles",
				globOptions: options.defaultGlobOptions
			}
		},
		{
			name: "clean",
			options: {
				srcFiles: "cleanDestFiles",
				globOptions: options.defaultGlobOptions
			}
		}
	];

	return taskDefinitions;
};
