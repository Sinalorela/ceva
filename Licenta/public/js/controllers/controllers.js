var ceva = angular.module('Licenta')
    ceva.controller('HomepageCtrl', ['$scope', '$routeParams', '$filter', '$http', 'AIService', function ($scope, $routeParams, $filter, $http, AIService) {

        $scope.dataFromBack = [];

        $scope.sub = function () {
            $http.post('/view', $scope.formData).
                success(function (data) {
                    $scope.dataFRomBack.push(data);

                    console.log("posted successfully");
                }).error(function (data) {
                    console.error("error in posting");
                })
        }
    



        //ceva.$inject = ['$scope'];
        //$('#jstree').jstree({ 'core' : {
        //    'data' : [
        //       {
        //         'text' : 'Result 1',
        //         'state' : {
        //           'opened' : true,
        //           'selected' : true
        //         },
        //         'children' : [
        //             {
        //                 'text': 'Result 1.1',
        //                 'state': {
        //                     'opened': true,
        //                     'selected': true
        //                 },
        //                 'children': [
        //                     {
        //                         'text': 'Result 1.1.1',
        //                         'state': {
        //                             'opened': true,
        //                             'selected': true
        //                         },
        //                         'children': [
        //                             {
        //                                 'text': 'Result 1.1.1.1',
        //                                 'state': {
        //                                     'opened': true,
        //                                     'selected': true
        //                                 },
        //                                 'children': [
        //                                     {
        //                                         'text': 'Result 1.1.1.1.1',
        //                                         'state': {
        //                                             'opened': true,
        //                                             'selected': true
        //                                         },
        //                                     },
        //                                     'Result 1.1.1.1.2'
        //                                 ]
        //                             },
        //                             {
        //                                 'text': 'Result 1.1.1.2',
        //                                 'state': {
        //                                     'opened': true,
        //                                     'selected': true
        //                                 },
        //                                 'children': [
        //                                     {
        //                                         'text': 'Result 1.1.1.2.1',
        //                                         'state': {
        //                                             'opened': true,
        //                                             'selected': true
        //                                         },
        //                                     },
        //                                     'Result 1.1.1.2.2'
        //                                 ]  
        //                             }, 
        //                             'Result 1.1.1.3'
        //                         ]
                             
        //                     },
        //                     'Result 1.1.2'
        //                 ]},
        //           'Result 1.2'
        //         ]
        //       },

        //       {
        //           'text': 'Result 2',
        //           'state': {
        //               'opened': true,
        //               'selected': true
        //           },
        //           'children': [
        //               { 'text': 'Result 2.1' },
        //               'Result 2.2'
        //           ]
        //       }
        //    ]
        //} 
        //});
        //$('#examples').jstree({
        //    'core': {
        //        'data': [
        //            'Simple root node',
        //            {
        //                'text': 'Root node 2',
        //                'state': {
        //                    'opened': true,
        //                    'selected': true
        //                },
        //                'children': [
        //                    { 'text': 'Child 1' },
        //                    'Child 2'
        //                ]
        //            }
        //        ]
        //    }
        //});

        

    }]);
//function BasicCtrl($scope) { };

// EOF
    
   