angular.module('Licenta')
    .factory('TreeViewService', ['$http', '$routeParams', function ($http, $routeParams) {
        return {
            post: function () {
                return $http.post('/api/view');
            }
        }
    }]);
