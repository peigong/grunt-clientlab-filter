/*
 * grunt-clientlab-filter
 * https://github.com/clientlab/grunt-clientlab-filter
 *
 * Copyright (c) 2013 clientlab
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.registerMultiTask('filter', 'replace placeholder.', function() {
    var options = this.options();
    
    this.files.forEach(function(file) {
        var contents = file.src.filter(function(filepath) {
            if (!grunt.file.exists(filepath)) {
                grunt.log.warn('Source file "' + filepath + '" not found.');
                return false;
            } else {
                return true;
            }
        }).map(function(filepath) {
            // Read and return the file's source.
            return grunt.file.read(filepath);
        }).join('\n');

        var i, filterset = [];
        for (i = 0; i < file.filters.length; i++) {
          var filter = file.filters[i];
          if (options.hasOwnProperty(filter) && (options[filter].length > 0)) {
              filterset = filterset.concat(options[filter]);
          }
        }
        if (filterset.length > 0) {
          for (i = 0; i < filterset.length; i++) {
            var reg = new RegExp(filterset[i]['token'],"g");
            contents = contents.replace(reg, filterset[i]['value']);
          }
          grunt.file.write(file.dest, contents);
          grunt.log.writeln('File "' + file.dest + '" filter created.');
        }
    });
  });
};
