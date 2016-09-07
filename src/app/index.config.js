(function () {
  'use strict';

  angular
    .module('pomodoroTimer')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig/*, $mdThemingProvider*/) {
    // Enable log
    $logProvider.debugEnabled(true);

    // $mdThemingProvider
    //   .theme('default')
    //   .primaryPalette('indigo')
    //   .accentPalette('pink')
    //   .warnPalette('red')
    //   .backgroundPalette('blue-grey');

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }

})();
