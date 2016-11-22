var app = angular.module("underground", ["ngRoute", "ngResource"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/page/:id", {
                templateUrl : function(page){
                    
        	return "assets/page-"+page.id+".html"
        },
        controller: "pagesController"
    })
    .otherwise("/page/0")
   
})

    .controller("pagesController",function($scope,$http,$rootScope,$routeParams, $location, $log){
        $scope.page=parseInt($routeParams.id) || 0;
         

    })

    .controller("contentController", function($scope,$http, $log){
        $scope.sendMessage=function(){
            // отправка отзыва на почту
        }

        $http.get('').success(function(data){
            $scope.contacts=data;

        })

        $http.get('data/employ.json').success(function(data){
            $scope.employ=data;

        })

        $http.get('data/shop.json').success(function(data){
            $scope.shop=data;

        })

        $http.get('data/images.json').success(function(data){
            $scope.images=data;

        })


        $http.get('data/price.json').success(function(data){
            $scope.price=data;

        })




    })

.directive("menu", function(){
    return {
        templateUrl:"assets/directives/menu.html",
        replace: true,
        restrict: 'E',
        

            controller: function($scope,$log,$http){

        $http.get('data/menu.json')
            .success(function(data, status, headers, config){
                 $scope.menu = data;})  
}
}})







