 angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

            .when('/', {
            templateUrl: 'views/patient.html',
            controller: 'PatientController'
        })

        .when('/temp', {
            templateUrl: 'views/temp.html',
            controller: 'myCtrl'
        });

    $locationProvider.html5Mode(true);

}]);