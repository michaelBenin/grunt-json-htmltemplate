## Example config

```javascript

grunt.initConfig({

  json_template_html: {
              src: {
                  src: 'src/js/template/src/templates.json',
                  templates: 'src/templates/compress/*',
                  dest: 'src/js/template/built/templates.json'
              }
          }

});

grunt.registerTask('default', ['json_template_html']);

// reference the templates name in grunt.jsTemplate

{
    "share_partial": <% print(grunt.jsTemplate["_share_partial"]); %>,
    "home_partial": <% print(grunt.jsTemplate["_home_partial"]); %>
}


```


