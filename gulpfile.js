"use strict";

var autoprefixer = require("gulp-autoprefixer");
var csso = require("gulp-csso");
var del = require("del");
var gulp = require("gulp");
var concat = require('gulp-concat');
var htmlmin = require("gulp-htmlmin");
var sass = require('gulp-sass')(require('node-sass'));
var ts = require('gulp-typescript');
var htmlreplace = require('gulp-html-replace');
var uglify = require("gulp-uglify");
var imagemin = require("gulp-imagemin");
var pngquant = require('imagemin-pngquant');
var CacheBuster = require('gulp-cachebust');

var cachebust = new CacheBuster();

// Gulp task to minify CSS files
gulp.task("styles", function () {
	return (
		gulp
			.src("./src/styles/*.scss")
			// Compile SASS files
			.pipe(
				sass({
					outputStyle: "nested",
					precision: 10,
					includePaths: ["."],
					onError: console.error.bind(console, "Sass error:"),
				})
			)
			// Auto-prefix css styles for cross browser compatibility
			.pipe(autoprefixer())
			// Minify the file
			.pipe(csso())
			// Caching
			.pipe(cachebust.references())
			.pipe(cachebust.resources())
			// Output
			.pipe(gulp.dest("./dist/styles"))
	);
});

// Gulp task to minify JavaScript files
gulp.task("scripts", function () {
	return (
		gulp
			.src('src/scripts/*.ts')
			// Compile TypeScript files
			.pipe(ts())
			// Minify the file
			.pipe(uglify())
			// Output
			.pipe(gulp.dest("./dist/scripts/temp"))
	);
});

gulp.task("modules", function () {
	const pathBootstrap = 'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
	const pathJQuery = 'node_modules/jquery/dist/jquery.min.js'

	return (
		gulp
			// Merge node_module files
			.src([pathBootstrap, pathJQuery, 'dist/scripts/temp/*.js'])
			.pipe(concat('bundle.js'))
			// Caching
			.pipe(cachebust.resources())
			.pipe(gulp.dest("./dist/scripts"))
	);
})

// Gulp task to minify HTML files
gulp.task("pages", function () {
	return (
		gulp
			.src(["./src/*.html"])
			.pipe(htmlreplace({
				'scripts': 'scripts/bundle.js'
			}))
			.pipe(
				htmlmin({
					collapseWhitespace: true,
					removeComments: true,
				})
			)
			// Caching
			.pipe(cachebust.references())
			.pipe(gulp.dest("./dist"))
	)
});

// Gulp task to minify images
gulp.task("images", function () {
	return (
		gulp
			.src("./src/assets/*")
			.pipe(imagemin([
				pngquant({ quality: [0.5, 0.5] })
			]))
			// Caching
			.pipe(cachebust.resources())
			.pipe(gulp.dest("./dist/assets"))
	);
});

// Gulp task to copy favicons and .htaccess
gulp.task("other", function () {
	return gulp.src("./src/{*.{png,xml,ico,svg,webmanifest},.htaccess}").pipe(gulp.dest("./dist"));
});

// Clear output directory
gulp.task("clear", () => del(["dist"]));

// Tidy output directory
gulp.task("tidy", () => del(["dist/scripts/temp"]));

// Gulp task to minify all files
gulp.task("default", gulp.series("clear", "other", "images", "styles", "scripts", "modules", "pages", "tidy"));
