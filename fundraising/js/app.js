var myApp = angular.module("myApp", [])
.config(function($locationProvider) {
    $locationProvider.html5Mode(true); 
  });


myApp.controller("AppController", function ($scope, $location) {
    
    $scope.events = [
        {
            id: 'coffee-corner',
            name: 'Coffee Corner',
            description: 'Join us in the Dream Centre lobby on Saturday mornings from 9:00 AM to 11:00 AM to support fundraising efforts for our Competitive Dance Team.',
            imgurl: './fundraising/img/coffee-beans.jpg'
        },
        {
            id: 'dance-a-thon',
            name: 'Dance-a-thon',
            description: 'Sponsor our Competitive Dance Team for their Dance-a-thon! We know they\'re incredible dancers, but how long can they keep it up?',
            imgurl: './fundraising/img/dance-a-thon.jpg'
        },
        {
            id: '50-50-draw',
            name: '50/50 Draw',
            description: 'Get your tickets to have a shot at the grand prize! You can win half of the money that is raised, and help contribute to a great season for our Competitive Dance Team.',
            imgurl: './fundraising/img/50-50-draw.jpg'
        },
    ]

    $scope.routeparams = $location.search();
    $scope.event = $scope.routeparams.event;
});

myApp.filter("to_trusted", [
  "$sce",
  function ($sce) {
    return function (text) {
      return $sce.trustAsHtml(text);
    };
  },
]);
