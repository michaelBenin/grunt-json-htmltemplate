/*
 * grunt-json-htmltemplate
 * http://gruntjs.com/
 *
 * Copyright (c) 2013 Michael Benin, contributors
 * Licensed under the MIT license.
 */

module.exports = function (grunt) {
    "use strict";

    var stringEscape = require('string-escape');

    grunt.registerMultiTask('json_html_template', 'create an object of all templates', function () {
        var src = this.data.src,
            templates = grunt.file.expand(this.data.templates),
            dest = this.data.dest,
            done = this.async(),
            file = grunt.file.read(src),
            js;
        grunt.jsTemplate = {};

        templates.forEach(function (f) {
            if(/\./.test(file)){
                var afiles = f.split('/');
                grunt.log.write('✔ '.green + 'Adding property: '+afiles[afiles.length - 1].split('.')[0]+' with the value of '+f+'\n');
                grunt.jsTemplate[afiles[afiles.length - 1].split('.')[0]] = stringEscape(grunt.file.read(f), {json:true});
            }
        });
        js = grunt.template.process(file);
        grunt.log.write('✔ '.green + 'Successfully templated '+src+'\n');
        grunt.file.write(dest, js);
        grunt.log.write('✔ '.green + 'Successfully wrote '+dest+'\n');
        done(true);
    });
};
