(function () {
    'use strict';

    var app = angular
    	.module('app', ['ngRoute', 'ui.bootstrap',])
        .config(config)
        .run(run);
   
    config.$inject = ['$routeProvider'];
    
    function config($routeProvider) {
        $routeProvider
        	.when('/home', {
        		controller: 'HomeController',
        		templateUrl: 'modules/home/home.html',
        		controllerAs: 'vm'
        	})
            .otherwise({ redirectTo: '/home' });
    }
    
    function run() {
        // TODO
    }

})();