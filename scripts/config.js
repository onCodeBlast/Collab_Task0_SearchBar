var srcapp = angular.module('searchApp', ['ngRoute', 'ngMaterial']);

srcapp.controller('rootCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.appTitle = "SearchApp";
    initValues($scope);
    $scope.src.itemSelected = itemSelected;
    $scope.src.query = (text) => query($http, text, $scope);
}]);
function query(http, text, scope){
    return http.get("http://localhost:3000/words",{
        params: {
            word_like: text,
            _limit: 20
        },
        responseType: "json"
    }).then(response => {
        return response.data.map(item => {
            return item.word;
        }).filter(item => {
            return GLOBAL_METHOD.match_start_substr(item, text);
        });
    }, (error) => {
        console.log(error);
    });
}

function itemSelected(params) {
    console.log(params);
}

function initValues($scope){
    $scope.src = {};
}