"use strict";

(function () {
  angular.module("psMenu").controller("psMenuController", function ($scope, $rootScope) {
    $scope.showMenu = true;

    this.setActiveItem = function (el) {
      $scope.activeElement = el;
    };

    this.getActiveItem = function () {
      return $scope.activeElement;
    };

    this.setRoute = function (route) {
      $rootScope.$broadcast('ps-menu-item-selected-event', { route: route });
    };

    $scope.$on('ps-menu-show', function (evt, data) {
      $scope.showMenu = data.show;
    });
  });
})();