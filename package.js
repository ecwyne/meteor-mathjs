Package.describe({
  summary: "Mathjs, An extensive math library for JavaScript, packaged for Meteor. See http://mathjs.org."
});

Package.on_use(function (api, where) {
  if(api.export) {
    api.export('mathjs');
  }
  where = where || ['client', 'server'];
  api.add_files('mathjs/dist/math.min.js', where);
  api.add_files('export-mathjs.js', where);
});