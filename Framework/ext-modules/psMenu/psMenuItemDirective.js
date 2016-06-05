"use strict";

(function () {
  angular.module("psMenu").directive("psMenuItem", function () {
    return {
      require: '^psMenu',
      scope: {
        label: '@',
        icon: '@',
        route: '@'
      },
      templateUrl: 'ext-modules/psMenu/psMenuItemTemplate.html',
      link: function (scope, el, attrs, ctrl) {
        el.on('click', function (evt) {
          evt.stopPropagation();
          evt.preventDefault();
          scope.$apply(function () {
            ctrl.setActiveItem(el);
            ctrl.setRoute(scope.route);
          });
        });

        scope.isActive = function () {
          return el === ctrl.getActiveItem();
        };
      }
    }
  });
})();