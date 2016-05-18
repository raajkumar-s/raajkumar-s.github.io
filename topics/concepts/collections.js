var collectionsModule = angular.module("CollectionsModule", []);

collectionsModule.controller("Collections", function ($scope, $http) {
    $http.get('../../data/collections.json').
    success(function (data) {
        $scope.articles = data.articles;
    }).
    error(function (error) {
         console.log(error);
    });
});