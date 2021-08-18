const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const browserSync = require('browser-sync').create()

// Luego de crear los estilos css, llama la función de sincronizar navegador
function crearEstilos () {
    return gulp
        .src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./styles'))
        .pipe(browserSync.stream())
}

function sincronizarServidor () {
    browserSync.init({
        port: 3000,
        server: {
            baseDir: './'
        },
        browser: 'firefox'
    })
}

function observarCambios () {
    sincronizarServidor ()
    gulp.watch('./scss/*.scss', crearEstilos)
    gulp.watch('./**/*.html').on('change', browserSync.reload)
    gulp.watch('./**/*.css').on('change', browserSync.reload)
    gulp.watch('./**/*.js').on('change', browserSync.reload)
}

gulp.task('sync', gulp.parallel(observarCambios))