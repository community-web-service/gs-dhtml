"use strict";

// @future Include comments that explains what each of these does.
// @future Consider converting this to XML.
module.exports = {
	browserifyBundle: "./js/bundle.js",
	jshintrc: ".jshintrc",
	jshintReporter: "default",
	wwwBase: "./src/www",
	jsdocConfig: {
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
