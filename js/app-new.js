var myApp = angular.module('myApp', []);

myApp.factory('serviceSessionStorage', ['$rootScope', function($rootScope) {
    return {
        get: function(key) {
            return JSON.parse(window.sessionStorage.getItem(key));
        },
        set: function(key, data) {
            window.sessionStorage.setItem(key, JSON.stringify(data));
        }
    };
}]);

myApp.factory('serviceLocalStorage', ['$rootScope', function($rootScope) {
    return {
        get: function(key) {
            return JSON.parse(window.localStorage.getItem(key));
        },
        set: function(key, data) {
            window.localStorage.setItem(key, JSON.stringify(data));
        }
    };
}]);

myApp.service('dataService', function($http) {
    delete $http.defaults.headers.common['X-Requested-With'];
    this.getSchedules = function(callbackFunc) {
        $http.get('https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsJSON?OrgId=520628').then(function(data){
            callbackFunc(data);
        });
    }
});

myApp.controller('MainCtrl', function($scope, dataService) {

    $scope.scheduledatareturned = false;
    $scope.getScheduleData = function() {
        dataService.getSchedules(function(scheduledata) {

            $scope.scheduledata = scheduledata.data.rows;




            angular.forEach($scope.scheduledata, function(value, key) {
                if (value) {

                    // convert meeting_days to array for sorting and filtering
                    var days = value.meeting_days;
                    value.meeting_days = Object.keys(days).map(v => new Array(v, days[v]));

                    // convert strings for min_age to be readable for users
                    if(value.min_age) {
                        value.min_age = formatAgeString(value.min_age);
                    }
                    // convert strings for max_age to be readable for users
                    if(value.min_age) {
                        value.max_age = formatAgeString(value.max_age);
                    }

                    // convert times from 24h to 12h
                    value.start_time = convertTime24to12(value.start_time);
                    value.end_time = convertTime24to12(value.end_time);



                }
            });

            $scope.scheduledatareturned = true;
            // console.log($scope.scheduledata);
        })
    }




    $scope.convertWeekday = function (day) {
        var weekday = new Array(7);
            weekday['mon'] = "Monday";
            weekday['tue'] = "Tuesday";
            weekday['wed'] = "Wednesday";
            weekday['thu'] = "Thursday";
            weekday['fri'] = "Friday";
            weekday['sat'] = "Saturday";
            weekday['sun'] = "Sunday";
            return weekday[day];
    }

    $scope.weekdayshort = [
        'mon','tue','wed','thu','fri','sat','sun'
    ]



    function formatAgeString(agestring) {
        agestring = agestring.substr(1); // remove first "P" character
        var agepcs = agestring.match(/.{1,3}/g);
        for(i=0; i<agepcs.length; i++) {
            agepcs[i] = agepcs[i].substring(0, agepcs[i].length - 1);
            agepcs[i] = agepcs[i].replace(/^0+/, '');
        }
        var newagestring = (agepcs[0]*1) + (agepcs[1]/12);
        return newagestring;
    }


    function convertTime24to12(time) {
        time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
        if (time.length > 1) { // If time format correct
            time = time.slice (1);  // Remove full string match value
            time[5] = +time[0] < 12 ? 'am' : 'pm'; // Set AM/PM
            time[0] = +time[0] % 12 || 12; // Adjust hours
        }
        // console.log(time);
        return time.join (''); // return adjusted time or original string
    }



    // $scope.dayFilters = {
    //     'mon': true,
    //     'tue': true,
    //     'wed': true,
    //     'thu': true,
    //     'fri': true,
    //     'sat': true,
    //     'sun': true
    // };


    // $scope.scheduleType = '';

    // $scope.age;


    // $scope.filterDay = function (item) {
    //     const entries = Object.entries($scope.dayFilters)
    //     for (const entry of entries) { // loop through dayFilters
    //         if (entry[1]==true) { // if the day is checked to be included
    //             if(item.meeting_days.daylist.includes(entry[0])) { // if the list of class days includes the checked filter day
    //                 return item;
    //             }
    //         }
    //     }
    // };



    // $scope.searchDone = function ($event) {
    //     $event.currentTarget.blur()
    // }



    // var myDate = new Date();
    // const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // const d = new Date();
    // $scope.month = monthNames[d.getMonth()];
    // $scope.year = d.getFullYear();

    // $scope.date = myDate;




    // $scope.limitDay = function (filteringday) {
    //     return function(item) {
    //         // console.log(item);
    //         // console.log(filteringday);
    //         return item.meeting_days.daylist.includes(filteringday,0);
    //     }
    // };


    // $scope.activeclassdays = function() {
    //     return function(item) {
    //         var results = new Array;
    //         angular.forEach(item.meeting_days, function(value, key) {
    //             if (value) {
    //                 console.log(value + ':' + key);
    //                 results.push(item);
    //             }
    //         });
    //         return results;
    //     }
    // }



});



myApp.filter('activeOnDay', function () {
    return function (items, day) {
        var result = [];
        angular.forEach(items, function(item) {
            for(i=0; i<item.meeting_days.length; i++) {
                // console.log(item.meeting_days[i][0]);
                if (item.meeting_days[i][1] == true && item.meeting_days[i][0] == day) {
                    // console.log(item);
                    result.push(item);
                }
            }
        });
        return result;
    }
})


myApp.filter('activedays', function () {
    return function (item) {
        var result = [];
        angular.forEach(item, function(value, key) {
            if (value[1]===true) {
                result.push(value[0]);
            }
        });
        return result;
    }
})


myApp.filter('ageFilter', function() {
    return function( items, filterAge ) {
        var result = [];
        if (filterAge) {
            angular.forEach(items, function(item) {
                var min = item.min_age*1;
                var max = item.max_age*1;
                if( filterAge >= min && filterAge <= max ) {
                    result.push(item);
                }
            });
            return result;
        }
        else {
            return items;
        }
    };
});


myApp.filter('dayFilter', function() {
    return function( items, filterDay ) {
        var result = [];
        if (filterDay) {
            angular.forEach(items, function(item) {
                angular.forEach(item.meeting_days, function(day) {
                    if (day[1]===true && day[0]==filterDay) {
                        // console.log(day[0]);
                        result.push(item);
                    }
                })
            });
            return result;
        }
        else {
            return items;
        }
    };
});

