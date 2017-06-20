//var myApp = angular.module('blogApp', ['ngRoute']); 

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
            // location of the template
        	templateUrl		: 'views/index-view.html',
        	// Which controller it should use 
            controller 		: 'mainController',
            // what is the alias of that controller.
        	controllerAs 	: 'mainList'
        }).
        when('/book/:name',{
            templateUrl:'views/book-detail.html',
            controller:'bookController',
            controllerAs:'bookPage'
        }).
        when('/house/:name',{
            templateUrl:'views/house-detail.html',
            controller:'houseController',
            controllerAs:'housePage'
        }).
        when('/char/:id',{
            templateUrl:'views/char-detail.html',
            controller:'charController',
            controllerAs:'charPage'
        })
        .otherwise(
            {
                //redirectTo:'/'
                template   : '<h1>404 page not found</h1>'
            }
        );
}]);