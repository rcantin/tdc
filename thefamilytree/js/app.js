var myApp = angular.module("myApp", []);

myApp.service("dataService", function ($http) {
  delete $http.defaults.headers.common["X-Requested-With"];
  this.getSchedules = function (callbackFunc) {
    $http.get("https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsJSON?OrgId=520628&Cat1=Family%20Tree").then(function (data) {
      callbackFunc(data);
    });
  };
});

myApp.controller("MainCtrl", function ($scope, $http, dataService) {
  $http.get("./data/calendar.json").then(function (data) {
    $scope.calendar = data.data;
  });

  $scope.membershipsreturned = false;
  $scope.getScheduleData = function () {
    dataService.getSchedules(function (memberships) {
      $scope.memberships = memberships.data.rows;
      $scope.membershipsreturned = true;
      // ================================================================
      // ================================================================
      // need to individually identify memberships in data in order to get info about openings (to display "wait list" or "register")
      // ================================================================
      // ================================================================
      console.log($scope.memberships);
    });
  };

  // set the current month on the calendar to today's month
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var today = new Date();
  $scope.showMonth = monthNames[today.getMonth()];

  $scope.filterNoEvents = function (item) {
    return item.events;
    // return item.events.length > 0;
  };
});

myApp.filter("to_trusted", [
  "$sce",
  function ($sce) {
    return function (text) {
      return $sce.trustAsHtml(text);
    };
  },
]);
