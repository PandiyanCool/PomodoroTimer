(function () {
  'use strict';

  angular
    .module('pomodoroTimer')
    .controller('MainController', MainController);

  angular
    .module('pomodoroTimer')
    .filter('secondsToDateTime', [function () {
      return function (input) {
        var minutes = parseInt(input / 60, 10);
        var seconds = input % 60;

        return minutes + ' m' +  ' : ' + seconds + ' s';
      }
    }])

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, $interval) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1473251366207;
    vm.showToastr = showToastr;

    vm.playTimer = playTimer;
    vm.resetTimer = resetTimer;
    vm.pauseTimer = pauseTimer;
    vm.tomatoSize = 1;
    vm.countDownTimer = vm.tomatoSize * 60;
    vm.timeStatus = 'initial';
    var stop;

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function () {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function (awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }


    function playTimer() {
      console.log('play timer module triggered!');

      if (angular.isDefined(stop)) return;

      stop = $interval(function () {
        if (vm.countDownTimer > 0) {
          vm.countDownTimer--;
        }
        else {
          resetTimer();
        }
      }, 1000);

    }

    function pauseTimer() {
      console.log('pause timer module triggered');
      if (angular.isDefined(stop)) {
        $interval.cancel(stop);
        stop = undefined;
      }
    }

    function resetTimer() {
      console.log('reset timer module triggered');
      vm.countDownTimer = vm.tomatoSize * 60;
      vm.determinateValue = vm.countDownTimer;
      pauseTimer();
    }

  }
})();
