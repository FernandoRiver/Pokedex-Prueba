const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require('sass'));

// Funcion SASS
function css(){
    return src("src/scss/app.scss")
    .pipe( sass() )
    .pipe( dest("public/style/") );
}


// Watch css()
function watchCss(){
    watch("src/scss/**/*.scss", css);
}
exports.css = watchCss