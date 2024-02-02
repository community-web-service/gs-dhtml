"use strict";

// @future Provide configuration options for ESLint
// @future Include comments that explains what each of these does.
module.exports = {
	browserifyBundle: "./js/bundle.js",
	wwwBase: "./src/www",
	jsDocConfig: {
		"opts": {
			"destination": "./doc/html"
		}
	},
	browserifyConfig: {
		debug: true
	},
	defaultGlobOptions: {
		strict: true,
		dot: true,
		follow: true
	}
};
