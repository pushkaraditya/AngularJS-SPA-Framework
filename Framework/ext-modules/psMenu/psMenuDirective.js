﻿"use strict";

(function () {
  angular.module("psMenu").directive("psMenu", function () {
    return {
      restrict: 'AE',
      scope:{

      },
      transclude: true,
      templateUrl: 'ext-modules/psMenu/psMenuTemplate.html',
      controller: 'psMenuController',
      link: function (scope, el, attrs) {

      }
    };
  });
})();