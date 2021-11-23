"use strict";

// @future Simplify this. 
// @future Include comments that explains what each of these does.
// @future Consider using glob-intersection to simplify patterns.
// @future Consider converting this to XML.
module.exports = [{
		// @future Couldn't this including files it shouldn't include?
		name: "staticFiles",
		globSet: [
			"./src/www/*",
			"./src/www/img/**/*",
			"./src/www/lib/**/*",
			"./src/www/fonts/**/*",
			"./src/www/audio/**/*",
			"./src/www/css/**/*.css",
			"./src/www/fonts/**/*.css"
		]
	}, {
		name: "srcRootHtmlFiles",
		globSet: [
			"./src/www/*.htm",
			"./src/www/*.html",
			"./src/www/*.xhtm",
			"./src/www/*.xhtml",
			"./src/www/*.mhtm",
			"./src/www/*.mhtml",
			"./src/www/*.shtm",
			"./src/www/*.shtml"
		]
	},
	// @future Isn't this including folders it shouldn't include?
	{
		name: "rootAssetFiles",
		globSet: [
			"./src/www/*",
			"!./src/www/*.htm",
			"!./src/www/*.html",
			"!./src/www/*.xhtm",
			"!./src/www/*.xhtml",
			"!./src/www/*.mhtm",
			"!./src/www/*.mhtml",
			"!./src/www/*.shtm",
			"!./src/www/*.shtml"
		]
	}, {
		name: "jsFiles",
		globSet: [
			"./src/www/js/*.js",
			"./src/www/js/modules/**/*.js",
			"./src/www/js/**/*.js",
			"./src/www/lib/modules/**/*.js"
		]
	}, {
		name: "cssFiles",
		globSet: [
			"./src/www/css/**/*.css"
		]
	}, {
		name: "imgFiles",
		globSet: [
			"./src/www/img/**/*"
		]
	}, {
		name: "audioFiles",
		globSet: [
			"./src/www/audio/**/*"
		]
	}, {
		name: "fontFiles",
		globSet: [
			"./src/www/fonts/**/*"
		]
	},	{
		name: "staticAssetFiles",
		globSet: []
	},
	{
		name: "srcRootDestFile",
		globSet: []
	},
	{
		name: "cssDestFiles",
		globSet: []
	},
	{
		name: "imgDestFiles",
		globSet: []
	},
	{
		name: "fontDestFiles",
		globSet: []
	},
	{
		name: "audioDestFiles",
		globSet: []
	},
	{
		name: "libDestFiles",
		globSet: []
	},
	{
		name: "jsDestFiles",
		globSet: []
	},
	{
		name: "htmlDestFiles",
		globSet: []
	},
	{
		name: "minDestDirectories",
		globSet: []
	},
	{
		name: "rawDestDirectories",
		globSet: []
	},
	{
		name: "destDirectories",
		globSet: []
	},
	// @future Some of this should be broken out into Swallower or a util plugin
	{
		name: "cleanDestFiles",
		globSet: [
			"./build/**/*",
			"./dist/**/*",
			".gitignore",
			".npmignore",
			"./doc/html/**/*"
		]
	}, {
		name: "scriptDirectories",
		globSet: [
			"./node_modules/",
			"./src/www/js/modules/",
			"./src/www/lib/modules/"
		]
	},
	{
		name: "browserifyEntries",
		globSet: ["./src/www/js/bundle.js"]
	},
	{
		name: "gitignoreFiles",
		globSet: ["gitignore/*.gitignore"]
	}
];
