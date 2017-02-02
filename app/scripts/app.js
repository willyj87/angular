'use strict';

/**
 * @ngdoc overview
 * @name mobileApp
 * @description
 * # mobileApp
 *
 * Main module of the application.
 */
 var mobileApp = angular.module('mobileApp', []);

mobileApp.controller("headerCtrl",function ($scope) {
   $scope.articles = [{"name" : "Telephone sans-fil", "quantity":1, "price":"29.99"}, {"name":"chargeur samsung", "quantity":1,"price":"29.99"}];
  $scope.total = function () {
   var total =0;
   for (var i = 0; i < $scope.articles.length;i++){
    total += $scope.articles[i].price * $scope.articles[i].quantity;
   }
   return total;
  };
  function calculateDiscount(newValue, oldValue, scope) {
    $scope.discount = (newValue > 100) ? newValue * 0.10:0;
  };
    $scope.finalTotal = function () {
    return $scope.total() - $scope.discount;
  };
 $scope.$watch($scope.total, calculateDiscount);
});
mobileApp.controller("menuCtrl",function ($scope) {

});
mobileApp.controller("contentCtrl",function ($scope) {

});
mobileApp.controller("footerCtrl",function ($scope) {

});