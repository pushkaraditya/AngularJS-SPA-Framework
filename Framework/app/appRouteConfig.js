"use strict";

angular.module("app").config(function ($routeProvider) {
  var routes = [
    {
      url: '/dashboard',
      config: {
        template: '<dwa-dashboard></dwa-dashboard>'
      }
    },
    {
      url: '/locations',
      config: {
        template: '<dwa-locations></dwa-locations>'
      }
    },
    {
      url: '/guides',
      config: {
        template: '<dwa-guides></dwa-guides>'
      }
    }
  ];

  routes.forEach(function (route) {
    $routeProvider.when(route.url, route.config);
  });

  $routeProvider.otherwise({ redirectTo: '/dashboard' });

});