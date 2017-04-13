Package.describe({
  summary: "A meteorite package that makes building dynamic two way forms easy",
  version: '0.2.3',
  name: "appworkshop:simple-form",
  git: 'https://github.com/AppWorkshop/simple-form'
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@0.9.0");
  api.use(['ui', 'templating', 'underscore', 'mrt:underscore-string-latest@2.3.3'], 'client');
  api.addFiles(['fileField.html', 'fileField.js', 'helper.js', 'simpleform.js'], 'client');
  api.export('SimpleForm', 'client');
});
