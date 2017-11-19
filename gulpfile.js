const gulp = require("gulp");
const ts = require("gulp-typescript");
const sourcemaps = require('gulp-sourcemaps');
const path = require('path');
const child_process = require('child_process');
const tsProject = ts.createProject("tsconfig.json");
const merge = require('merge2')

gulp.task("default",["ts","move"], () => {
    gulp.watch("src/**/*.ts", ["ts"]);
    gulp.watch("src/**/!(*.ts)",["move"]);
})

gulp.task("ts", function() {
    var tsResult = tsProject.src()
        .pipe(sourcemaps.init()) // This means sourcemaps will be generated
        .pipe(tsProject());
    // return tsResult.js
    //         .pipe(sourcemaps.write('../maps')) // Now the sourcemaps are added to the .js file
    //         .pipe(gulp.dest('dist'))
    return merge([
        tsResult.js
            .pipe(sourcemaps.write('../maps')) // Now the sourcemaps are added to the .js file
            .pipe(gulp.dest('dist')),
        tsResult.dts
            .pipe(gulp.dest('dist'))
    ])
});

gulp.task("move",()=>{
    return gulp.src("src/**/!(*.ts)")
        .pipe(gulp.dest('dist'));
})

gulp.task("test:watch",()=>{
    gulp.watch("dist/**/*.js", ["test"]);
    gulp.watch("spec/**/*[Ss]pec.js", ["test"]);
})

gulp.task('test',function(){
    child_process.spawnSync("jasmine",[],{
        cwd: __dirname,
        stdio: 'inherit',
    },(err,std,ser)=>{
        console.log(std);
    })
});