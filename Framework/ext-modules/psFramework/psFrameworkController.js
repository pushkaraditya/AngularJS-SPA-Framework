﻿/// <reference path="psFrameworkController.js" />
"use strict";

(function () {
  angular.module("psFramework").controller("psFrameworkController",
    function ($scope, $window, $timeout, $rootScope, $location) {
    $scope.isMenuVisible = true;
    $scope.isMenuButtonVisible = true;
    $scope.isMenuVertical = true;

    $scope.$on('ps-menu-item-selected-event', function (evt, data) {
      $scope.routeString = data.route;
      checkWidth();
      broadcastMenuState();
      $location.path(data.route);
    });

    $scope.$on('ps-menu-orientation-changed-event', function (evt, data) {
      $scope.isMenuVertical = data.isMenuVertical;
    });

    $($window).on('resize.psFramework', function () {
      $scope.$apply(function () {
        checkWidth();
        broadcastMenuState();
      });
    });

    $scope.$on("$destroy", function () {
      $($window).off('resize.framework');
    });

    var checkWidth = function () {
      var width =  Math.max($($window).width(), $window.innerWidth);
      $scope.isMenuVisible = (width > 768);
      $scope.isMenuButtonVisible = !$scope.isMenuVisible;
    };

    $scope.menuButtonClicked = function () {
      $scope.isMenuVisible = !$scope.isMenuVisible;
      broadcastMenuState();
      //$scope.$apply();
    };

    var broadcastMenuState = function () {
      $rootScope.$broadcast('ps-menu-show',
        {
          show: $scope.isMenuVisible,
          isVertical: $scope.isMenuVertical,
          allowHorizontalToggle: !$scope.isMenuButtonVisible
        });
    };

    $timeout(function () {
      checkWidth();
    }, 0);
  });
})();