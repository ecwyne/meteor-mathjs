Package.describe({
  summary: 'Mathjs, An extensive math library for JavaScript, packaged for Meteor. See http://mathjs.org.',
  version: '1.6.0_2',
  git: 'https://github.com/ecwyne/meteor-mathjs',
  name: 'ecwyne:mathjs'
});

Package.on_use(function (api, where) {
  if(api.export) {
    api.export('mathjs');
  }
  where = where || ['client', 'server'];
  api.add_files('mathjs/dist/math.min.js', where);
  api.add_files('export-mathjs.js', where);
});