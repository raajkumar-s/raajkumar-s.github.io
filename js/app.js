var mApp = angular.module("mApp", []);

mApp.controller("ArticleController", function ($scope, $http) {
    $http.get('./data/main-articles.json').
    success(function (data) {
        $scope.articles = data.articles;
        console.log($scope.articles);
    }).
    error(function (error) {
        console.log("Error reading main-articles.json: " + error);
    });
});