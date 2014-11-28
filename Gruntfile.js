module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            src: {
                files: ['**/*.scss', '**/*.php'],
                tasks: ['compass:dev']
            },
           options: {
                livereload: true,
            },
        },
        compass: {
            dev: {
                options: {
                    sassDir: 'custom-sass',
                    cssDir: 'css',
                    imagesPath: 'images',
                    noLineComments: false,
                    outputStyle: 'nested'
                }
            },
            prod: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'css',
                    imagesPath: 'images',
                    noLineComments: true,
                    outputStyle: 'compressed'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
