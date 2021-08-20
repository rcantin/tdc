var myApp = angular.module("myApp", []);

myApp.controller("MainController", function ($scope, $http) {});

myApp.controller("ClassController", function ($scope, $http) {
  $scope.getClasses = function (cat1, cat2, cat3, day) {
    $scope.classesreturned = false;

    var req = {
      method: "GET",
      url: "https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsJSON",
      headers: {
        "Content-Type": undefined,
      },
      params: {
        OrgId: "520628",
        ClassDays: day,
        Status: "Active",
        Cat1: cat1,
        Cat2: cat2,
        Cat3: cat3,
      },
    };
    $http(req).then(
      function successCallback(response) {
        var tempdata = response.data.rows; // jackrabbit
        // var tempdata = response.data; // local

        for (let i = 0; i < tempdata.length; i++) {
          // convert times from 24h to 12h
          tempdata[i].start_time = convertTime24to12(tempdata[i].start_time);
          tempdata[i].end_time = convertTime24to12(tempdata[i].end_time);

          // format age strings to readable format
          // console.log(tempdata[i]);
          if (tempdata[i].min_age) {
            tempdata[i].min_age = convertAgeString(tempdata[i].min_age);
          }
          if (tempdata[i].max_age) {
            tempdata[i].max_age = convertAgeString(tempdata[i].max_age);
          }

          var daylist = new Array();
          for (const key in tempdata[i].meeting_days) {
            let value = tempdata[i].meeting_days[key];
            if (value) {
              daylist.push(key);
            }
          }
          tempdata[i].meeting_days.daylist = daylist;

          tempdata[i].online_reg_link = tempdata[i].online_reg_link.replaceAll("&amp;", "&");
        }

        $scope.classes = tempdata;
        $scope.classesreturned = true;
        $scope.classlistlength = $scope.classes.length;
        console.log($scope.classes);

        $scope.eventtype = "Recreational";
      },
      function errorCallback(response) {
        console.log(response);
      }
    );
  };

  function convertTime24to12(time) {
    time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
    if (time.length > 1) {
      time = time.slice(1); // Remove full string match value
      time[5] = +time[0] < 12 ? " AM" : " PM"; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(""); // return adjusted time or original string
  }

  function convertAgeString(agestring) {
    agestring = agestring.substr(1); // remove first "P" character
    var agepcs = agestring.match(/.{1,3}/g);
    for (i = 0; i < agepcs.length; i++) {
      agepcs[i] = agepcs[i].substring(0, agepcs[i].length - 1);
      agepcs[i] = agepcs[i].replace(/^0+/, "");
    }
    var newagestring = agepcs[0] * 1 + agepcs[1] / 12;
    return newagestring;
  }
});

myApp.filter("to_trusted", [
  "$sce",
  function ($sce) {
    return function (text) {
      return $sce.trustAsHtml(text);
    };
  },
]);

myApp.filter("ageFilter", function () {
  return function (items, filterAge) {
    var result = [];
    if (filterAge) {
      angular.forEach(items, function (item) {
        var min = item.min_age * 1;
        var max = item.max_age * 1;
        if (filterAge >= min && filterAge <= max) {
          result.push(item);
        }
      });
      return result;
    } else {
      return items;
    }
  };
});

myApp.filter("dayFilter", function () {
  return function (items, filterDay) {
    var result = [];
    if (filterDay) {
      angular.forEach(items, function (item) {
        // console.log(item.meeting_days.daylist.includes(filterDay));
        if (item.meeting_days.daylist.includes(filterDay)) {
          result.push(item);
        }
      });
      return result;
    } else {
      return items;
    }
  };
});

myApp.filter("monthFilter", function () {
  return function (items, filterMonth) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var result = [];
    if (filterMonth) {
      angular.forEach(items, function (item) {
        const classdate = new Date(item.start_date);
        if (filterMonth == monthNames[classdate.getMonth()]) {
          result.push(item);
        }
      });
      return result;
    } else {
      return items;
    }
  };
});

myApp.filter("yearFilter", function () {
  return function (items, filterYear) {
    var result = [];
    if (filterYear) {
      angular.forEach(items, function (item) {
        const classdate = new Date(item.start_date);
        if (filterYear == classdate.getFullYear()) {
          result.push(item);
        }
      });
      return result;
    } else {
      return items;
    }
  };
});
