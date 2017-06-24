angular.module('Licenta', ['ngCookies', 'ngResource', 'ngMessages', 'ngRoute'])
    .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    
        $locationProvider.html5Mode(true);

        $routeProvider
            .when('/homepage', {
                templateUrl: 'views/homepage.html'
            })
            
    }])
