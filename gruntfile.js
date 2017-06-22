module.exports = function (grunt) {
	
	grunt.initConfig({
			pkg: grunt.file.readJSON('package.json'),
			mochaTest: {
				test: {
					options: {
					reporter: 'spec',
					captureFile: './tests/results.txt', // Optionally capture the reporter output to a file 
					quiet: false, // Optionally suppress output to standard out (defaults to false) 
					clearRequireCache: false, // Optionally clear the require cache before running tests (defaults to false) 
					noFail: false // Optionally set to not fail on failed tests (will still fail on other errors) 
					},
					src: ['test/**/*.js']
				}
			},
			nodemon : {
				dev: {
        			script: 'server/dev/server.js'
				}
			}
	});	
  	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-nodemon');

	grunt.registerTask('default', 'mochaTest');
	grunt.registerTask('default', ['nodemon']);
};

