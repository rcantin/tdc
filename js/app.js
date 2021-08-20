var myApp = angular.module("myApp", []);

myApp.factory("serviceSessionStorage", [
  "$rootScope",
  function ($rootScope) {
    return {
      get: function (key) {
        return JSON.parse(window.sessionStorage.getItem(key));
      },
      set: function (key, data) {
        window.sessionStorage.setItem(key, JSON.stringify(data));
      },
    };
  },
]);

myApp.factory("serviceLocalStorage", [
  "$rootScope",
  function ($rootScope) {
    return {
      get: function (key) {
        return JSON.parse(window.localStorage.getItem(key));
      },
      set: function (key, data) {
        window.localStorage.setItem(key, JSON.stringify(data));
      },
    };
  },
]);

myApp.service("dataService", function ($http) {
  delete $http.defaults.headers.common["X-Requested-With"];
  this.getSchedules = function (callbackFunc) {
    $http.get("https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsJSON?OrgId=520628").then(function (data) {
      callbackFunc(data);
    });
  };
  this.getNav = function (callbackFunc) {
    $http.get("../data/nav.json").then(function (data) {
      callbackFunc(data);
    });
  };
  this.getEvents = function (callbackFunc) {
    $http.get("./../data/events-new.json").then(function (data) {
      callbackFunc(data);
    });
  };
  this.getDBEvents = function (callbackFunc) {
    $http.get("../db/getEvents.php").then(function (data) {
      callbackFunc(data);
    });
  };
  this.getSummerCampData = function (callbackFunc) {
    $http.get("../data/summer-camp.json").then(function (data) {
      callbackFunc(data);
    });
  };
  this.getSummerCampFAQData = function (callbackFunc) {
    $http.get("../data/summer-camp-faq.json").then(function (data) {
      callbackFunc(data);
    });
  };
  this.getFacultyData = function (callbackFunc) {
    $http.get("../data/faculty.json").then(function (data) {
      callbackFunc(data);
    });
  };
});

// myApp.config([
//   "$locationProvider",
//   function ($locationProvider) {
//     $locationProvider.html5Mode({
//       enabled: true,
//       requireBase: false,
//     });
//   },
// ]);

myApp.controller("MainCtrl", function ($scope, $location, $window, dataService) {
  $scope.today = new Date();

  $scope.scheduledatareturned = false;

  $scope.getScheduleData = function () {
    dataService.getSchedules(function (scheduledata) {
      // console.log(scheduledata.data.rows);
      for (var i = 0; i < scheduledata.data.rows.length; i++) {
        // convert times from 24h to 12h
        scheduledata.data.rows[i].start_time = convertTime24to12(scheduledata.data.rows[i].start_time);
        scheduledata.data.rows[i].end_time = convertTime24to12(scheduledata.data.rows[i].end_time);

        // format age strings to readable format
        if (scheduledata.data.rows[i].min_age) {
          scheduledata.data.rows[i].min_age = convertAgeString(scheduledata.data.rows[i].min_age);
        }
        if (scheduledata.data.rows[i].max_age) {
          scheduledata.data.rows[i].max_age = convertAgeString(scheduledata.data.rows[i].max_age);
        }

        // create array of class days
        var daylist = new Array();
        for (const key in scheduledata.data.rows[i].meeting_days) {
          let value = scheduledata.data.rows[i].meeting_days[key];
          if (value) {
            daylist.push(key);
          }
        }
        scheduledata.data.rows[i].meeting_days.daylist = daylist;

        scheduledata.data.rows[i].online_reg_link = scheduledata.data.rows[i].online_reg_link.replaceAll("&amp;", "&");
      }
      $scope.scheduledata = scheduledata.data.rows;
      $scope.scheduledatareturned = true;
    });
  };

  $scope.dayFilters = {
    mon: true,
    tue: true,
    wed: true,
    thu: true,
    fri: true,
    sat: true,
    sun: true,
  };

  $scope.scheduleType = "";

  $scope.age;

  $scope.filterDay = function (item) {
    const entries = Object.entries($scope.dayFilters);
    for (const entry of entries) {
      if (entry[1] == true) {
        if (item.meeting_days.daylist.includes(entry[0])) {
          return item;
        }
      }
    }
  };

  $scope.filterAge = function (item) {
    if ($scope.age) {
      // only do if there is a value entered for age
      if ($scope.age >= item.min_age && $scope.age <= item.max_age) {
        // check if age value is between min and max ages for class
        return item;
      }
    } else {
      return item;
    }
  };

  $scope.searchDone = function ($event) {
    $event.currentTarget.blur();
  };

  var myDate = new Date();
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const d = new Date();
  $scope.month = monthNames[d.getMonth()];
  $scope.year = d.getFullYear();

  $scope.date = myDate;

  function convertTime24to12(time) {
    time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
    if (time.length > 1) {
      // If time format correct
      time = time.slice(1); // Remove full string match value
      time[5] = +time[0] < 12 ? " AM" : " PM"; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    // console.log(time);
    return time.join(""); // return adjusted time or original string
  }

  function convertAgeString(agestring) {
    agestring = agestring.substr(1); // remove first "P" character
    var agepcs = agestring.match(/.{1,3}/g);
    for (i = 0; i < agepcs.length; i++) {
      agepcs[i] = agepcs[i].substring(0, agepcs[i].length - 1);
      agepcs[i] = agepcs[i].replace(/^0+/, "");
    }
    // var newagestring = agepcs[0] + ' yrs ' + agepcs[1] + ' mos';
    var newagestring = agepcs[0] * 1 + agepcs[1] / 12;
    return newagestring;
  }

  $scope.limitDay = function (filteringday) {
    return function (item) {
      // console.log(item);
      // console.log(filteringday);
      return item.meeting_days.daylist.includes(filteringday, 0);
    };
  };

  $scope.daylist = [
    {
      short: "mon",
      full: "Monday",
    },
    {
      short: "tue",
      full: "Tuesday",
    },
    {
      short: "wed",
      full: "Wednesday",
    },
    {
      short: "thu",
      full: "Thursday",
    },
    {
      short: "fri",
      full: "Friday",
    },
    {
      short: "sat",
      full: "Saturday",
    },
    {
      short: "sun",
      full: "Sunday",
    },
  ];

  $scope.navitemsreturned = false;
  $scope.getNav = function () {
    dataService.getNav(function (navitems) {
      $scope.navitems = navitems.data;
      $scope.navitemsreturned = true;
    });
  };

  $scope.eventdatareturned = false;
  $scope.getEventData = function () {
    dataService.getEvents(function (eventdata) {
      $scope.eventdata = eventdata.data;
      $scope.eventdatareturned = true;
    });
  };
  $scope.getDBEvents = function () {
    dataService.getDBEvents(function (dbevents) {
      let dbeventdata = dbevents.data;
      console.log(dbeventdata);
      $scope.dbevents = dbeventdata;
      $scope.eventdatareturned = true;
    });
  };

  $scope.campsreturned = false;
  $scope.getSummerCamps = function () {
    dataService.getSummerCampData(function (camps) {
      $scope.camps = camps.data;
      $scope.campsreturned = true;
    });
  };

  $scope.campfaqreturned = false;
  $scope.getSummerCampFAQs = function () {
    dataService.getSummerCampFAQData(function (faqs) {
      $scope.campfaqs = faqs.data;
      $scope.campfaqreturned = true;
    });
  };

  $scope.facultyreturned = false;
  $scope.getFaculty = function () {
    dataService.getFacultyData(function (faculty) {
      $scope.faculty = faculty.data;
      $scope.facultyreturned = true;
    });
  };

  $scope.setFacultyCategory = function () {
    var queryString = window.location.search;
    queryString = queryString.substring(1);
    var params = [];
    var segments = queryString.split("&");
    for (var i = 0; i < segments.length; i++) {
      params.push(segments[i].split("="));
    }
    console.log(params);
  };

  $scope.yearlist = [2020, 2021];
  $scope.monthlist = [
    { num: "01", name: "January" },
    { num: "02", name: "February" },
    { num: "03", name: "March" },
    { num: "04", name: "April" },
    { num: "05", name: "May" },
    { num: "06", name: "June" },
    { num: "07", name: "July" },
    { num: "08", name: "August" },
    { num: "09", name: "September" },
    { num: "10", name: "October" },
    { num: "11", name: "November" },
    { num: "12", name: "December" },
  ];
});

myApp.filter("to_trusted", [
  "$sce",
  function ($sce) {
    return function (text) {
      return $sce.trustAsHtml(text);
    };
  },
]);

myApp.filter("classMonth", function () {
  return function (item, month) {
    var result = [];
    for (var i = 0; i < item.length; i++) {
      var itemdate = item[i].start_date;
      var itemmonth = itemdate.substring(5, 7);
      if (itemmonth == month) {
        result.push(item[i]);
      }
    }
    return result;
  };
});

myApp.filter("classYear", function () {
  return function (item, year) {
    var result = [];
    for (var i = 0; i < item.length; i++) {
      var itemdate = item[i].start_date;
      var itemyear = itemdate.substring(0, 4);
      if (itemyear == year) {
        result.push(item[i]);
      }
    }
    return result;
  };
});

myApp.filter("filterBeforeToday", function () {
  return function (items) {
    var today = new Date();
    var arrayToReturn = [];
    for (var i = 0; i < items.length; i++) {
      if (items[i].enddate) {
        var tempDate = items[i].enddate.replace(/-/g, "/");
      } else {
        var tempDate = items[i].startdate.replace(/-/g, "/");
      }
      var eventenddate = new Date(tempDate);
      //   console.log("- - - - - - - - - - - ");
      //   console.log("Tod: " + today);
      //   console.log("End: " + eventenddate);
      if (today < eventenddate) {
        arrayToReturn.push(items[i]);
      }
    }
    return arrayToReturn;
  };
});

// ------------- new controller for class listing tables -------------------------

myApp.controller("ClassController", function ($scope, $http) {
  $scope.getClasses = function (cat1, cat2, cat3, day) {
    $scope.classesreturned = false;

    var req = {
      method: "POST",
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
        var tempdata = response.data.rows;

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
              daylist.push($scope.convertWeekday(key));
            }
          }
          tempdata[i].meeting_days.daylist = daylist;
        }

        $scope.classes = tempdata;
        $scope.classesreturned = true;
        // console.log($scope.classes);
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

  $scope.convertWeekday = function (day) {
    var weekday = new Array(7);
    weekday["mon"] = "Monday";
    weekday["tue"] = "Tuesday";
    weekday["wed"] = "Wednesday";
    weekday["thu"] = "Thursday";
    weekday["fri"] = "Friday";
    weekday["sat"] = "Saturday";
    weekday["sun"] = "Sunday";
    return weekday[day];
  };
});
