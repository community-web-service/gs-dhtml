"use strict";

module.exports = function genericFileCopier(options) {
	var taskDefinitions = [{
			name: "copySrcRoot",
			options: {
				srcFiles: "rootAssetFiles",
				destDirectories: "destDirectories",
				globOptions: options.defaultGlobOptions
			}
		},
		{
			name: "copyStaticAssets",
			options: {
				srcFiles: "staticFiles",
				destDirectories: "destDirectories",
				globOptions: options.defaultGlobOptions
			}
		},
		{
			name: "copyCss",
			options: {
				srcFiles: "cssFiles",
				destDirectories: "destDirectories",
				globOptions: options.defaultGlobOptions
			}
		},
		{
			name: "copyImg",
			options: {
				srcFiles: "imgFiles",
				destDirectories: "destDirectories",
				globOptions: options.defaultGlobOptions
			}
		},
		{
			name: "copyAudio",
			options: {
				srcFiles: "audioFiles",
				destDirectories: "destDirectories",
				globOptions: options.defaultGlobOptions
			}
		},
		{
			name: "copyFont",
			options: {
				srcFiles: "fontFiles",
				destDirectories: "destDirectories",
				globOptions: options.defaultGlobOptions
			}
		},
		{
			name: "copyLib",
			options: {
				srcFiles: "libFiles",
				destDirectories: "destDirectories",
				globOptions: options.defaultGlobOptions
			}
		},
		{
			name: "copyHtml",
			options: {
				srcFiles: "srcRootHtmlFiles",
				destDirectories: "destDirectories",
				globOptions: options.defaultGlobOptions
			}
		}
	];

	return taskDefinitions;
};
