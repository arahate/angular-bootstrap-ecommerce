module.exports = function (grunt) {
	
	grunt.initConfig({
			pkg: grunt.file.readJSON('package.json'),
			// express: {
			// 		dev: {
			// 			options: {
			// 			port: 9000,
        	// 			bases: ['app', 'node_modules','theme']
			// 			}
			// 		},
			// 		prod: {
			// 			options: {
			// 				script: 'server/prod/server.js',
			// 				node_env: 'production'
			// 			}
			// 		},
			// 		test: {
			// 			options: {
			// 				script: 'server/test/server.js'
			// 			}
			// 		}
			// 	},
			nodemon : {
				dev: {
        			script: 'server/dev/server.js'
				}
			}
	});	

	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-express-server');
	grunt.loadNpmTasks('grunt-express');
	grunt.registerTask('default', ['nodemon']);
};

