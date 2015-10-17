 var myApp = angular.module('myApp', []);

 myApp.directive('googleplace', function() {
     return {
         require: 'ngModel',
         link: function(scope, element, attrs, model) {
             var options = {
                 types: [],
                 componentRestrictions: {}
             };
             scope.search = new google.maps.places.Autocomplete(element[0], options);

             google.maps.event.addListener(scope.search, 'place_changed', function() {
                 scope.$apply(function() {
                     model.$setViewValue(element.val());
                 });
             });
         }
     };
 });
 //myApp.factory('myService', function() {});

 function MyCtrl($scope) {
     $scope.search;
 }