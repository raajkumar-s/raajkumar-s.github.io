var mApp = angular.module("mApp", []);

mApp.controller("ArticleController", function ($scope, $http) {
    $http.get('./data/main-articles.json').
    success(function (data) {
        $scope.articles = data.articles;
    }).
    error(function (error) {
        console.log("Error reading main-articles.json: " + error);
    });
});

mApp.controller("ProfilesController", function ($scope, $http) {
    $http.get('./data/profiles.json').
    success(function (data) {
        $scope.profiles = data.profiles;
        console.log($scope.profiles);
    }).
    error(function (error) {
        console.log("Error reading profiles.json: " + error);
    });
});