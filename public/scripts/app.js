/**
 * Created by HUANGCH7 on 3/17/2016.
 */

var app = angular.module('DatabotApp', [
    'ngRoute',
    'DatabotControllers',
    'DatabotFilters'
]);
app.config(['$routeProvider', '$locationProvider',function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(false).hashPrefix('');
    $routeProvider
        .when('/probdataList',
        {
            templateUrl: './partials/probdataList.html',
            controller: 'MainController'
        })
        .when('/probdataList/:_id',
        {
            templateUrl: './partials/probdataDetail.html',
            controller: 'ProbdataDetailController'
        })
        .otherwise({
            redirectTo: '/probdataList'
        });
}]);



