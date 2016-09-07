(function() {
  'use strict';

  angular
    .module('pomodoroTimer')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
