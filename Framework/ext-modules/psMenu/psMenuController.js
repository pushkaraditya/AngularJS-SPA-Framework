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

    this.setOpenMenuScope = function (scope) {
      $scope.openMenuScope = scope;
    };

    $scope.toggleMenuOrientation = function () {
      if ($scope.openMenuScope)
        $scope.openMenuScope.closeMenu();

      $scope.isVertical = !$scope.isVertical;

      $rootScope.$broadcast('ps-menu-orientation-changed-event', { isMenuVertical: $scope.isVertical });
    };

    this.isVertical = function () {
      return $scope.isVertical;
    };

    angular.element(document).bind('click', function (e) {
      if ($scope.openMenuScope && !$scope.isVertical) {
        if ($(e.target).parent().hasClass('ps-selectable-item'))
          return;
        $scope.$apply(function () {
            $scope.openMenuScope.closeMenu();
        });
        e.preventDefault();
        e.stopPropagation();
      }
    });
  });
})();