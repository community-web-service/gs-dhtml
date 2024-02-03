"use strict";

// @future Include comments that explains what each of these does.
module.exports = {
	webpackBundle: "./js/bundle.js",
	wwwBase: "./src/www",
	jsDocConfig: {
		"opts": {
			"destination": "./doc/html"
		}
	},
	webpackConfig: {
		mode: "none",
		output: {
			filename: "js/[name]",
		},
	},
	esLintConfig: {},
	defaultGlobOptions: {
		strict: true,
		dot: true,
		follow: true
	}
};
