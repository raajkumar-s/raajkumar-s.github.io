var collectionsModule = angular.module("CollectionsModule", []);

collectionsModule.controller("Collections", function ($scope, $http) {
    // Simple GET request example :
    $http.get('../../data/collections.json').
    success(function (data) {
        $scope.articles = data.articles;
    }).
    error(function (error) {
         console.log(error);
    });
});