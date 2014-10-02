Package.describe({
  summary: "A meteorite package that makes building dynamic two way forms easy",
  version: '0.2.0',
  name: "joshowens:simple-form",
  git: 'https://github.com/MeteorClub/simple-form'
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@0.9.0");
  api.use(['ui', 'templating', 'underscore', 'mrt:underscore-string-latest'], 'client');
  api.addFiles(['fileField.html', 'fileField.js', 'helper.js', 'simpleform.js'], 'client');
  api.export('SimpleForm', 'client');
});
