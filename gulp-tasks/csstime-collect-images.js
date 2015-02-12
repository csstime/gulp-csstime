'use strict';

var gulp = require('gulp'),
	path = require('path'),
	config = require('../config.json'),
	gulpif = require('gulp-if'),
	imagemin = require('gulp-imagemin'),
	imageminConfig = require(config.configsPath + '.imagemin.json');

module.exports = function () {
	return gulp.src(path.join(
			config.destinationDir,
			config.componentsAssetsDir,
			'*',
			config.imagesDir,
			'**'
		))
		.pipe(gulpif(
			config.useImageOptimization,
			imagemin(imageminConfig)
		))
		.pipe(gulp.dest(path.join(
			config.destinationDir,
			config.staticDir
		)));
};