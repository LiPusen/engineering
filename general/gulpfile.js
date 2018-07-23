// 引入 gulp
var gulp = require('gulp');
var conf = require('./gulp.conf.js');
 
// 引入插件
var base64 = require('gulp-base64'),
    mkdir = require('mkdirp'),
	server = require('gulp-connect'),
	del = require('del'),
	autoprefixer = require('gulp-autoprefixer'),
	less = require('gulp-less'),
    imagemin = require('gulp-imagemin'),
    pngcrush = require('imagemin-pngcrush'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    minhtml = require('gulp-htmlmin'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename');
 
// 初始化目录结构
gulp.task('initdir', () => {
	const dir = ['common', 'js', 'img', 'imgsc', 'less', 'dist'];
	dir.forEach(k => mkdir.sync(k))
})

// 压缩html
gulp.task('minhtml', () => {
	return gulp.src('./*.html')
		.pipe(minhtml(conf.minhtml))
		.pipe(gulp.dest('./dist'))
})

// 复制common到dist文件夹
gulp.task('mv', () => {
	return gulp.src('./common/*')
		.pipe(gulp.dest('./dist/common'))
})

// 图片优化
gulp.task('img', () => {
	return gulp.src('imgsc/*.{png,jpg,gif,ico,svg}')
		.pipe(imagemin({...conf.imgup, use: [pngcrush()]}))
		.pipe(gulp.dest('./img'))
		.pipe(gulp.dest('./dist/img'))
})

// css编译
gulp.task('less', () => {
	return gulp.src('less/*.less')
		.pipe(less())
//		.pipe(gulp.dest('less'))
		.pipe(autoprefixer(conf.prefix))
		.pipe(base64(conf.base64))
		.pipe(minifycss())
		.pipe(gulp.dest('./dist/css'))
})

// js压缩
gulp.task('minjs', () => {
	return gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js'))
})

// css合并
gulp.task('handlecss', () => {
	return gulp.src('dist/css/*.css')
		.pipe(concat('handle.css'))
		.pipe(minifycss())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('./dist'))
})

// js合并
gulp.task('handlejs', () => {
	return gulp.src('dist/js/*.js')
		.pipe(concat('handle.js'))
		.pipe(uglify())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('./dist'))
})

// 清空dist文件夹
gulp.task('del', cb => {
	del('./dist/*', cb)
})

gulp.task('init', ['del', 'minhtml', 'mv', 'img', 'less', 'minjs'], () => {})

// 启动服务器
gulp.task('server', () => {
	return server.server({
		root: "./dist",
		livereload: true,
		port: 3000
	})
})

// 热更新
gulp.task('reload', () => {
	return gulp.src('./dist/**/*.html')
		.pipe(server.reload())
})

// 监控文件并重启
gulp.task('watch', () => {
	gulp.watch('./*.html', ['minhtml']);
	gulp.watch('./common/*', ['mv']);
	gulp.watch('./imgsc/*', ['img']);
	gulp.watch('./less/*.less', ['less'])
	gulp.watch('./js/*.js', ['minjs']);
	gulp.watch('./dist/**/*.*', ['reload']);
})


gulp.task("default", ["server", "watch"], () => {});