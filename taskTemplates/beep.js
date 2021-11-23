"use strict";

module.exports = function beep() {
	var beeper = require("beeper");

	var taskFunction = function () {
		return beeper();
	};
	
	return taskFunction;
};
