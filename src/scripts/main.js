'use strict';
// eslint-disable-next-line
import smoothscroll from 'smoothscroll-polyfill';

window.__forceSmoothScrollPolyfill__ = true;
smoothscroll.polyfill();

document.querySelectorAll('.nav-item').forEach(function(indicator) {
  indicator.addEventListener('click', function() {
    if (!indicator.classList.contains('dropdown')) {
      document.querySelector('.navbar-toggler').classList.add('collapsed');
      document.querySelector('.navbar-collapse').classList.remove('show');
    }
  })
});

document.querySelectorAll('.dropdown-item').forEach(function(indicator) {
  indicator.addEventListener('click', function() {
    document.querySelector('.navbar-toggler').classList.add('collapsed');
    document.querySelector('.navbar-collapse').classList.remove('show');
  })
});