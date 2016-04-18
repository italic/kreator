var gulp = require('gulp');
var paths = require("./dev/tasks/paths");

gulp.task("clean", require(paths.sources.tasks + "clean"));

// static assets
gulp.task("fonts", require(paths.sources.tasks + "fonts"));

// generated assets
gulp.task("styles", require(paths.sources.tasks + "styles"));
gulp.task("scripts:vendors", require(paths.sources.tasks + "scripts").vendors);
gulp.task("scripts:plugins", require(paths.sources.tasks + "scripts").plugins);
gulp.task("scripts:main", require(paths.sources.tasks + "scripts").main);
gulp.task("scripts", ["scripts:vendors", "scripts:plugins", "scripts:main"]);
gulp.task("images", require(paths.sources.tasks + "images"));
gulp.task("icons", require(paths.sources.tasks + "icons"));

// build
gulp.task("build", [
	"styles",
	"scripts",
	"fonts",
	"images",
	"icons"
]);

// dev tasks
gulp.task("server", ["build"], require(paths.sources.tasks + "server").start);
gulp.task("watch", ["build"], require(paths.sources.tasks + "watch"));
gulp.task("default", [
	"build",
	"server",
	"watch"
]);
