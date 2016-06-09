"use strict";

(function () {
  angular.module("psMenu").directive("psMenu", function ($timeout) {
    return {
      restrict: 'AE',
      scope:{

      },
      transclude: true,
      templateUrl: 'ext-modules/psMenu/psMenuTemplate.html',
      controller: 'psMenuController',
      link: function (scope, el, attrs) {
        $timeout(function () {
            el.find('.ps-selectable-item:first').trigger('click');
        }, 10);
      }
    };
  });
})();