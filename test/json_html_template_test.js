'use strict';
var grunt = require('grunt');

exports.json_html_template = {
    template: function (test) {
        test.expect(1);

        var actual = '';
        var original = '';
        test.ok(actual = original, 'should return a valid json object');

        test.done();
    }
};
