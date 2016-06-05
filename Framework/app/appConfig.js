"use strict";

(function () {
  angular.module("app").config(function ($provide) {
    $provide.decorator("$exceptionHandler", function ($delegate) {
      return function (exception, cause) {
        $delegate(exception, cause);
        alert(exception.message);
      }
    });
  });
})();