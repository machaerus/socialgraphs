module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		// vars

		project: {
			css: [
				'sass/style.scss'
			]
		},		
		sass: {
			dist: {
				options: {
					style: 'compressed',
					compass: false
				},
				files: {
					'style.css': '<%= project.css %>'
				}
			}
		},
		watch: {
			sass: {
				files: 'sass/{,*/}*.{scss,sass}',
				tasks: ['sass:dist']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default', ['sass']);

};
