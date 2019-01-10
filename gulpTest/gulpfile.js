"use strict";

var config = {
    server: {
        baseDir: './dist'
    },
    notify: false
};

var path = {
    dist: {
        html: 'dist/',
        js: 'dist/js/',
        jsmain: 'dist/js',
        css: 'dist/css/',
        img: 'dist/img/',
        fonts: 'dist/fonts/'
    },
    app: {
        html: 'app/*.html',
        js: 'app/js/*.js',
        jsmain: 'app/js/main.js',
        scss: 'app/css/*.scss',
        css: 'app/css/*.css',
        img: 'app/img/**/*.*',
        fonts: 'app/fonts/**/*.*'
    },
    watch: {
        html: 'app/**/*.html',
        js: 'app/js/**/*.js',
        scss: 'app/css/*.scss',
        css: 'app/css/*.css',
        img: 'app/img/**/*.*',
        fonts: 'app/fonts/**/*.*'
    },
    clean: './dist/'
};

var gulp = require("gulp"),
    watch = require('gulp-watch'), // смотритель
    webserver = require('browser-sync'), // сервер для работы и автоматического обновления страниц
    plumber = require('gulp-plumber'), // модуль для отслеживания ошибок
    rigger = require('gulp-rigger'), // модуль для импорта содержимого одного файла в другой
    sourcemaps = require('gulp-sourcemaps'), // модуль для генерации карты исходных файлов
    sass = require('gulp-sass'), // модуль для компиляции SASS (SCSS) в CSS
    autoprefixer = require('autoprefixer'), // модуль для автоматической установки автопрефиксов
    cleanCSS = require('gulp-clean-css'), // плагин для минимизации CSS
    uglify = require('gulp-uglify'), // модуль для минимизации JavaScript
    cache = require('gulp-cache'), // модуль для кэширования
    imagemin = require('gulp-imagemin'), // плагин для сжатия PNG, JPEG, GIF и SVG изображений
    jpegrecompress = require('imagemin-jpeg-recompress'), // плагин для сжатия jpeg
    pngquant = require('imagemin-pngquant'), // плагин для сжатия png
    del = require('del'); // плагин для удаления файлов и каталогов


/* задачи */

// запуск сервера +
gulp.task('webserver', function (done) {
    browserSync(config);
    done();
});

// сбор html
gulp.task('html:build', function (done) {
    gulp.src(path.app.html) // выбор всех html файлов по указанному пути
        .pipe(plumber()) // отслеживание ошибок
        .pipe(rigger()) // импорт вложений
        .pipe(gulp.dest(path.dist.html)) // выкладывание готовых файлов
        .pipe(webserver.reload({stream: true})); // перезагрузка сервера
    done();
});

// сбор стилей
gulp.task('scss:build', function (done) {
    gulp.src(path.app.scss) // получим main.scss
        .pipe(plumber()) // для отслеживания ошибок
        .pipe(sourcemaps.init()) // инициализируем sourcemap
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', sass.logError)) // scss -> css
        .pipe(autoprefixer(/*{тут был автопрефиксер-лист(галп-автопрефиксер я поменял его на просто автопрефиксер)}*/)) // добавим префиксы
        .pipe(cleanCSS()) // минимизируем CSS
        .pipe(sourcemaps.write('./')) // записываем sourcemap
        .pipe(gulp.dest(path.dist.css)) // выгружаем в dist
        .pipe(webserver.reload({stream: true})); // перезагрузим сервер
    done();
});

gulp.task('css:build', function (done) {
    gulp.src(path.app.css)
        .pipe(gulp.dest(path.dist.css));// Переносим скрипты в продакшен
    done();
});

// сбор js
gulp.task('jsmain:build', function (done) {
    gulp.src(path.app.jsmain) // получим файл main.js
        .pipe(plumber()) // для отслеживания ошибок
        .pipe(rigger()) // импортируем все указанные файлы в main.js
        .pipe(sourcemaps.init()) //инициализируем sourcemap
        .pipe(uglify()) // минимизируем js
        .pipe(sourcemaps.write('./')) //  записываем sourcemap
        .pipe(gulp.dest(path.dist.jsmain)) // положим готовый файл
        .pipe(webserver.reload({stream: true})); // перезагрузим сервер
    done();
});

gulp.task('js:build', function (done) {
    gulp.src([path.app.js, '!app/js/main.js'])
        .pipe(gulp.dest(path.dist.js));// Переносим скрипты в продакшен
    done();
});

// перенос шрифтов
gulp.task('fonts:build', function (done) {
    gulp.src(path.app.fonts)
        .pipe(gulp.dest(path.dist.fonts));
    done();
});

// обработка картинок
gulp.task('image:build', function (done) {
    gulp.src(path.app.img) // путь с исходниками картинок
        .pipe(cache(imagemin([ // сжатие изображений
            imagemin.gifsicle({interlaced: true}),
            jpegrecompress({
                progressive: true,
                max: 90,
                min: 80
            }),
            pngquant(),
            imagemin.svgo({plugins: [{removeViewBox: false}]})
        ])))
        .pipe(gulp.dest(path.dist.img)); // выгрузка готовых файлов
    done();
});

// удаление каталога dist
gulp.task('clean:build', function (done) {
    del.sync(path.clean);
    done();
});

// очистка кэша
gulp.task('cache:clear', function (done) {
    cache.clearAll();
    done();
});

// сборка
gulp.task('build', gulp.series('clean:build', 'html:build', 'scss:build', 'css:build', 'js:build', 'jsmain:build', 'fonts:build', 'image:build', function (done) {
    done();
}));

// запуск задач при изменении файлов
/*
gulp.task('watch', function () {
    gulp.watch(path.watch.html, ['html:build']);
    gulp.watch(path.watch.css, ['css:build']);
    gulp.watch(path.watch.js, ['js:build']);
    gulp.watch(path.watch.img, ['image:build']);
    gulp.watch(path.watch.fonts, ['fonts:build']);
    gulp.watch(path.watch.fonts, ['jsmain:build']);
});
*/

gulp.task('watch', function (done) {
    watch([path.watch.html], function (event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.css], function (event, cb) {
        gulp.start('css:build');
    });
    watch([path.watch.scss], function (event, cb) {
        gulp.start('scss:build');
    });
    watch([path.watch.js], function (event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.img], function (event, cb) {
        gulp.start('image:build');
    });
    watch([path.watch.fonts], function (event, cb) {
        gulp.start('fonts:build');
    });
    done();
});

// задача по умолчанию
gulp.task('default', gulp.series(/*'clean:build', */ 'build', 'webserver', 'watch', function () {
}));