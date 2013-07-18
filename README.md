# grunt-json-htmltemplate [![Build Status](https://secure.travis-ci.org/michaelbenin/grunt-json-htmltemplate.png?branch=master)](http://travis-ci.org/gruntjs/grunt-json-htmltemplate)

> Create a json object from html templates

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-json-htmltemplate --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-json-htmltemplate');
```

## grunt-js-template task
_Run this task with the `grunt json_html_template` command._

## Example config

```javascript

grunt.initConfig({

  js_template_html: {
              src: {
                  src: 'src/js/template/src/templates.json',
                  templates: 'src/templates/compress/*',
                  dest: 'src/js/template/built/templates.json'
              }
          }

});

grunt.registerTask('default', ['js_template_html']);

// reference the templates name in grunt.jsTemplate

{
    "share_partial": <% print(grunt.jsTemplate["_share_partial"]); %>,
    "home_partial": <% print(grunt.jsTemplate["_home_partial"]); %>
}

```