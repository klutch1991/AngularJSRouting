(function () {

    angular.module('app')
        .controller('ClassroomController', ['$routeParams', 'notifier', 'dataService', ClassroomController]);

    function ClassroomController($routeParams, notifier, dataService) {

        var vm = this;

        vm.month = $routeParams.month;
        

        dataService.getClassroom($routeParams.id)
            .then(function(classroom) {
                vm.currentClassroom = classroom;

                if($routeParams.month) {
                    if(classroom.activities && classroom.activities.length > 0) {
                        vm.timePeriod = dataService.getMonthName($routeParams.month);
                    }
                    else {
                        vm.timePeriod = 'No activities this month';
                    }
                }
                else {
                    vm.timePeriod = 'All activities';
                }
            })
            .catch(showError);
        
        function showError (message) {
            notifier.error(message);
        };

    }

}());