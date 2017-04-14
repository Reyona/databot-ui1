/**
 * Created by HUANGCH7 on 3/17/2016.
 */

var app = angular.module('MyApp',['toggle-switch']);
app.controller('MyCtrl',['$scope','$http',MyCtrl]);

function MyCtrl($scope,$http){
/*    //jq
    $("[name='my-checkbox']").bootstrapSwitch();*/

    //Angular-toggle-switch
    $scope.test=function(){
        alert('test');
        $scope.switchStatus=!$scope.switchStatus;
    };
    $scope.switchStatus=true;

    //
    $scope.greeting='Good morning!';
    $scope.userName='Cherry';

    $scope.addUser=function(){
        var request={
            method:'POST',
            url:'/users',
            timeout:10000,
            data:{
                name:$scope.userName,
                password:$scope.userName
            }
        };
        return $http(request)
            .then(function(res){
                alert('Receive:'+res.data);
        });
    };


    $scope.SayHi1=function(){
        var request1={
            method:'POST',
            url:'/hi',
            timeout:10000,
            data:{
                say:'Say Hi to Node111'
            }
        };
        return $http(request1)
            .then(function(res){
                alert('Send:  '+request1.data.say+'\nReceive:   '+res.data);
                return res.data;
            });
    };

    $scope.SayHi2=function(){
        var request2={
            method:'GET',
            url:'/hi/hi',
            timeout:10000
        };
        return $http(request2)
            .then(function(res){
                alert(res.data.message);
                return res.data;
            });
    }
}


