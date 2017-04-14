/**
 * Created by HUANGCH7 on 2/23/2017.
 */
var DatabotControllers = angular.module('DatabotControllers', ['toggle-switch']);
DatabotControllers.controller('MainController', ['$scope', '$http', MainController]);
DatabotControllers.controller('ProbdataDetailController', ['$scope', '$http', '$routeParams',ProbdataDetailController]);

function MainController($scope, $http) {
    //init page
    (function init(){
        return $http({
            method: 'GET',
            url: '/probdata',
            timeout: 10000,
            params: {
                criteria: {}
            }
        })
            .then(function (res) {
                console.log(res.data);
                $scope.probdata = res.data.splice(0, 50);
/**             Temporarily only show 50 records,
*               because too much data may cause performance issue in front-end
                Should implement paging function in next step.**/
            });
    })();

    $scope.switchIgnore = function (_id) {
        var index = 0;
        for(; $scope.probdata.length;index++) {
            if($scope.probdata[index]._id === _id) break;
        }
        console.log($scope.probdata[index]);
        return $http({
            method: 'POST',
            url: '/probdata',
            timeout: 10000,
            data: {
                criteria: {_id:$scope.probdata[index]._id},
                update:{$set:{ignore:!$scope.probdata[index].ignore}}
            }
        })
            .then(function (res) {
                if(res.data.result === 'success') {
                    $scope.probdata[index].ignore = !$scope.probdata[index].ignore;
                }
            });
    };

}

function ProbdataDetailController($scope, $http, $routeParams) {
    $scope._id=$routeParams._id;
    return $http({
        method: 'GET',
        url: '/probdata',
        timeout: 10000,
        params: {
            criteria: {
                _id:$routeParams._id
            }
        }
    })
        .then(function (res) {
            console.log(res.data[0]);
            $scope.probdatum=res.data[0];
        });
}