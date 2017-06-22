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
					src: ['tests/**/*.js']
				}
			},
			watch: {
				js: {
					options: {
					spawn: true,
					interrupt: true,
					debounceDelay: 250,
					},
					files: ['gruntfile.js', 'app/**/*.js', 'tests/**/*.js'],
					tasks: ['env:test','mochaTest']
				}
			},
			nodemon : {
				dev: {
        			script: 'server/dev/server.js'
				}
			},
			env : {
					dev : {
						NODE_ENV : 'dev',
						PORT     : '3000',
						MONGO_CONNECTIONSTRING : 'mongodb://localhost:27017/e-commerce',
						MONGO_DB: 'e-commerce'
					},
					test : {
						NODE_ENV : 'test',
						PORT     : '3001',
						MONGO_CONNECTIONSTRING : 'mongodb://localhost:27017/e-commerce_test',
						MONGO_DB: 'e-commerce_test'
					},
			}
	});	

	grunt.loadNpmTasks('grunt-env');
  	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('test', ['env:test','nodemon','mochaTest']);
	grunt.registerTask('default', ['env:dev','nodemon' ]);
};

