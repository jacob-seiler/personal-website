"use strict";

var autoprefixer = require("gulp-autoprefixer");
var csso = require("gulp-csso");
var del = require("del");
var gulp = require("gulp");
var htmlmin = require("gulp-htmlmin");
var sass = require("gulp-sass");
var uglify = require("gulp-uglify");
var imagemin = require("gulp-imagemin");

// Gulp task to minify CSS files
gulp.task("styles", function () {
	return (
		gulp
			.src("./src/css/main.scss")
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
			// Output
			.pipe(gulp.dest("./dist/css"))
	);
});

// Gulp task to minify JavaScript files
gulp.task("scripts", function () {
	return (
		gulp
			.src("./src/js/*.js")
			// Minify the file
			.pipe(uglify())
			// Output
			.pipe(gulp.dest("./dist/js"))
	);
});

// Gulp task to minify HTML files
gulp.task("pages", function () {
	return gulp
		.src(["./src/*.html"])
		.pipe(
			htmlmin({
				collapseWhitespace: true,
				removeComments: true,
			})
		)
		.pipe(gulp.dest("./dist"));
});

// Gulp task to minify images
gulp.task("images", function () {
	return gulp.src("./src/assets/*").pipe(imagemin()).pipe(gulp.dest("./dist/assets"));
});

// Gulp task to copy favicons
gulp.task("favicon", function () {
	return gulp.src("./src/*.{png,xml,ico,svg,webmanifest}").pipe(gulp.dest("./dist"));
});

// Clean output directory
gulp.task("clean", () => del(["dist"]));

// Gulp task to minify all files
gulp.task("default", gulp.series("clean", "styles", "scripts", "pages", "images", "favicon"));
