var app = angular.module('my-app', ['ngRoute']);

app.config(function($routeProvider) {
     $routeProvder.when('/', {
          controller: 'mainContoller',
          templateUrl: main.html
     });
}

app.contolloer('mainController', function($scope, $http) {
     $http.get('www.github.com/?username=allenhthompson')
     .success(getData) {
          $scope.viewData = getData;
     }
})
