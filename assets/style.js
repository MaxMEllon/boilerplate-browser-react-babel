require('!style!css!sass!./app.sass');
const debug = require('../src/utils/debug');
if (module.hot) {
  module.hot.accept(function(err) {
    if (err) console.error(err);
    debug('[LOADED] : style.js');
  });
}
