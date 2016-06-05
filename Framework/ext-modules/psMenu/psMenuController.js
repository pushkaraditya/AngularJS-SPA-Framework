"use strict";

(function () {
  angular.module("psMenu").controller("psMenuController", function ($scope, $rootScope) {
    this.setActiveItem = function (el) {
      $scope.activeElement = el;
    };

    this.setRoute = function (route) {
      $rootScope.$broadcast('ps-menu-item-selected-event', { route: route });
    };
  });
})();