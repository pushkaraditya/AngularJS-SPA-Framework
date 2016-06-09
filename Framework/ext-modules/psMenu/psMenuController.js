"use strict";

(function () {
  angular.module("psMenu").controller("psMenuController", function ($scope, $rootScope) {
    $scope.showMenu = true;
    $scope.isVertical = true;

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

    $scope.toggleMenuOrientation = function () {
      $scope.isVertical = !$scope.isVertical;

      $rootScope.$broadcast('ps-menu-orientation-changed-event', { isMenuVertical: $scope.isVertical });
    };

    this.isVertical = function () {
      return $scope.isVertical;
    };
  });
})();