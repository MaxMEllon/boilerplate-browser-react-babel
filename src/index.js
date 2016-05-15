'use strict';

import '../assets/style';
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello';
import debug from './utils/debug';

window.onload = function() {
  ReactDOM.render(<Hello />, document.getElementById('main'));
  if (module.hot) {
    module.hot.accept(function(err) {
      if (err) console.error(err);
    });
  }
}

// vim: ft=javascript.jsx

