(function() {

    var app = angular.module('app', ['ngRoute']);

    app.config(['$logProvider', '$routeProvider', function ($logProvider, $routeProvider) {

        $logProvider.debugEnabled(true);

        $routeProvider
            .when('/' , {
                controller: 'HomeController',
                controllerAs: 'vm',
                templateUrl: 'app/templates/home.html'
            })
            .when('/schools' , {
                controller: 'AllSchoolsController',
                controllerAs: 'vm',
                templateUrl: 'app/templates/allSchools.html',
                caseInsensitiveMatch: true
            })            
            .when('/classrooms' , {
                controller: 'AllClassroomsController',
                controllerAs: 'vm',
                templateUrl: 'app/templates/allClassrooms.html',
                caseInsensitiveMatch: true//,
                // resolve: {
                //     promise: function() {throw 'error transitioning to classrooms';}
                // }
            })
            .when('/classrooms/:id' , {
                controller: 'ClassroomController',
                controllerAs: 'vm',
                templateUrl: 'app/templates/classroom.html',
                caseInsensitiveMatch: true
                
            })
            .when('/classrooms/:id/detail/:month?' , {
                controller: 'ClassroomController',
                controllerAs: 'vm',
                templateUrl: 'app/templates/classroomDetail.html',
                caseInsensitiveMatch: true
                
            })
            .when('/activities' , {
                controller: 'AllActivitiesController',
                controllerAs: 'vm',
                templateUrl: 'app/templates/allActivities.html',
                caseInsensitiveMatch: true
            })
            .otherwise('/');
    }]);

    app.run(['$rootScope', '$log', function($rootScope, $log){

        $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
            $log.debug('Successfully changed routes');

            $log.debug(event);
            $log.debug(current);
            $log.debug(previous);
        });

        $rootScope.$on('$routeChangeError', function(event, current, previous, rejection) {
            $log.debug('Error changing routes');

            $log.debug(event);
            $log.debug(current);
            $log.debug(previous);
            $log.debug(rejection);
        });

    }]);

}());