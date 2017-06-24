angular.module('Licenta')
    .controller('HomepageCtrl', ['$scope', '$routeParams', 'TreeViewService', function ($scope, $routeParams, TreeViewService) {

        $scope.dataFromBack = [];
        $scope.formData = {};

        $scope.sub = function () {
            TreeViewService.post($scope.formData).success(function(res) {
                console.log(res);
                console.log("posted successfully");
            });
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
    
        //var app = angular.module('tree', ['tree.service', 'tree.directives'])
        //app.controller("TreeController", ["TreeService", function (TreeService) {
        //    var tc = this;
        //    buildTree();
        //    function buildTree() {
        //        TreeService.getTree().then(function (result) {
        //            tc.tree = result.data;
        //        }, function (result) {
        //            alert("Tree no available, Error: " + result);
        //        });
        //    }
        //}]);
   