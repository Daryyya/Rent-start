import replace from 'gulp-replace'
import gulpPlumber from 'gulp-plumber'
import gulpNotify from 'gulp-notify'
import browserSync from 'browser-sync'
import newer from 'gulp-newer'
import ifPlugin from 'gulp-if'

export const plugins = {
	replace: replace,
	plumber: gulpPlumber,
	notify: gulpNotify,
	browsersync: browserSync,
	newer: newer,
	if: ifPlugin
}
