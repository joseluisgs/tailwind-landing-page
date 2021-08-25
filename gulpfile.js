/**
*   Gulp con TailwindCSS  
*   Puedes cambiar la configuración desde el fichero config.js                                                           
**/

const { src, dest, task, watch, series, parallel } = require('gulp');
const del = require('del'); //Limpia los directorios y ficheros de destino
const options = require("./config"); //Path de configuración necesarias
const browserSync = require('browser-sync').create();

// Plugins de Gulp
const sass = require('gulp-sass'); //Compila los ficheros Saas
const postcss = require('gulp-postcss'); //Compila TailwindCSS
const concat = require('gulp-concat'); //Concatena los ficheros js y css
const uglify = require('gulp-terser');//Minimiza los ficheros js
const imagemin = require('gulp-imagemin'); //To Optimize Images
const cleanCSS = require('gulp-clean-css');//Minimiza los ficheros css
const purgecss = require('gulp-purgecss');// Limpia estilos css no usados

//Nota : Webp no está soportado en otroas navegadores como Firefox
//const webp = require('gulp-webp'); //Para convertir imagenes en webp
//const replace = require('gulp-replace'); //Reempleza las imagenes por su corrspondiente webp
const logSymbols = require('log-symbols'); //Para console logs simbólicos

//Recarga la vista en el explorador
function livePreview(done){
  browserSync.init({
    server: {
      baseDir: options.paths.dist.base
    },
    port: options.config.port || 5000
  });
  done();
} 

// Dispara los eventos de recarga
function previewReload(done){
  console.log("\n\t" + logSymbols.info,"Reloading Browser Preview.\n");
  browserSync.reload();
  done();
}

//Tareas de desarrollo

// Procesa el HTML
function devHTML(){
  return src(`${options.paths.src.base}/**/*.html`).pipe(dest(options.paths.dist.base));
} 

// Procesa los estilos
function devStyles(){
  const tailwindcss = require('tailwindcss'); 
  return src(`${options.paths.src.css}/**/*.scss`).pipe(sass().on('error', sass.logError))
    .pipe(dest(options.paths.src.css))
    .pipe(postcss([
      tailwindcss(options.config.tailwindjs),
      require('autoprefixer'),
    ]))
    .pipe(concat({ path: 'style.css'}))
    .pipe(dest(options.paths.dist.css));
}

// Procesa los scripts
function devScripts(){
  return src([
    `${options.paths.src.js}/libs/**/*.js`,
    `${options.paths.src.js}/**/*.js`,
    `!${options.paths.src.js}/**/external/*`
  ]).pipe(concat({ path: 'scripts.js'})).pipe(dest(options.paths.dist.js));
}

// Procesa las imágenes
function devImages(){
  return src(`${options.paths.src.img}/**/*`).pipe(dest(options.paths.dist.img));
}

// Visualiza los cambios 
function watchFiles(){
  watch(`${options.paths.src.base}/**/*.html`,series(devHTML, devStyles, previewReload));
  watch([options.config.tailwindjs, `${options.paths.src.css}/**/*.scss`],series(devStyles, previewReload));
  watch(`${options.paths.src.js}/**/*.js`,series(devScripts, previewReload));
  watch(`${options.paths.src.img}/**/*`,series(devImages, previewReload));
  console.log("\n\t" + logSymbols.info,"Watching for Changes..\n");
}

// Limpia los directorios de destino para comenzar
function devClean(){
  console.log("\n\t" + logSymbols.info,"Cleaning dist folder for fresh start.\n");
  return del([options.paths.dist.base]);
}

// Tareas de producción para obtener los ficheros finales
function prodHTML(){
  return src(`${options.paths.src.base}/**/*.html`).pipe(dest(options.paths.build.base));
}

// Producción, estilos
function prodStyles(){
  return src(`${options.paths.dist.css}/**/*`)
  .pipe(purgecss({
    content: ['src/**/*.{html,js}'],
    defaultExtractor: content => {
      const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
      const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []
      return broadMatches.concat(innerMatches)
    }
  }))
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(dest(options.paths.build.css));
}

// Producción, scripts
function prodScripts(){
  return src([
    `${options.paths.src.js}/libs/**/*.js`,
    `${options.paths.src.js}/**/*.js`
  ])
  .pipe(concat({ path: 'scripts.js'}))
  .pipe(uglify())
  .pipe(dest(options.paths.build.js));
}

// Producción, imagenes
function prodImages(){
  return src(options.paths.src.img + '/**/*').pipe(imagemin()).pipe(dest(options.paths.build.img));
}

// Producción, limpia los directorios
function prodClean(){
  console.log("\n\t" + logSymbols.info,"Cleaning build folder for fresh start.\n");
  return del([options.paths.build.base]);
}

// Producción, finalización
function buildFinish(done){
  console.log("\n\t" + logSymbols.info,`Production build is complete. Files are located at ${options.paths.build.base}\n`);
  done();
}

// Taras por defecto, modo dev
exports.default = series(
  devClean, // Limpiamos
  parallel(devStyles, devScripts, devImages, devHTML), //Tareas en paralelo
  livePreview, // Cargamos el LiveServer
  watchFiles // Vigilamos los cambios y hacemos la recarga
);

exports.prod = series(
  prodClean, // Limpiamos el directorio de destino
  parallel(prodStyles, prodScripts, prodImages, prodHTML), //Tareas en paralelo
  buildFinish
);