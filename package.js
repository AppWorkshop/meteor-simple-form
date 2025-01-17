Package.describe({
  summary: "A meteorite package that makes building dynamic two way forms easy",
  version: '0.2.4',
  name: "appworkshop:simple-form",
  git: 'https://github.com/AppWorkshop/simple-form'
});

Npm.depends({
  "underscore.string": "3.3.6",
  "underscore.inflection": "1.3.3",
});

Package.onUse(function(api) {
  api.use(['ecmascript', 'ui', 'templating', 'underscore'], 'client');
  api.addFiles(['fileField.html', 'fileField.js', 'helper.js', 'simpleform.js'], 'client');
  api.export('SimpleForm', 'client');
});
