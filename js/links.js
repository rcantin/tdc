var myApp = angular.module("linkApp", []);

myApp.factory("serviceLocalStorage", [
  function() {
    return {
      get: function(key) {
        return JSON.parse(window.localStorage.getItem(key));
      },
      set: function(key, data) {
        window.localStorage.setItem(key, JSON.stringify(data));
      }
    };
  }
]);

myApp.controller("linkController", function($scope, serviceLocalStorage) {
  $scope.searchtext = "";

  $scope.init = function() {
    if (serviceLocalStorage.get("category")) {
      $scope.category = serviceLocalStorage.get("category");
    } else {
      $scope.category = "";
    }
  };

  $scope.changecategory = function() {
    serviceLocalStorage.set("category", $scope.category);
  };

  $scope.links = [
    {
      id: 1,
      category: "Turns Classes",
      items: [
        {
          name: "Crunches",
          description: "",
          url: "https://youtu.be/BwPi96aDSwQ",
          iconclasses: "fab fa-youtube fa-fw mr-1"
        },
        {
          name: "Exercise # 1",
          description: "",
          url: "https://youtu.be/JFaJdZHx0RI",
          iconclasses: "fab fa-youtube fa-fw mr-1"
        },
        {
          name: "Exercise # 2",
          description: "",
          url: "https://youtu.be/Be1Er7EN25I",
          iconclasses: "fab fa-youtube fa-fw mr-1"
        },
        {
          name: "Exercise # 3",
          description: "",
          url: "https://youtu.be/ufPZ0zFeCFg",
          iconclasses: "fab fa-youtube fa-fw mr-1"
        }
      ]
    },
    {
      id: 2,
      category: "Superhero Hip Hop",
      items: [
        {
          name: "Warm Up Part 1",
          description: "",
          url: "https://youtu.be/VCgcnl_gLhk",
          iconclasses: "fab fa-youtube fa-fw mr-1"
        },
        {
          name: "Warm Up Part 2",
          description: "",
          url: "https://youtu.be/sHV0YaPXJkw",
          iconclasses: "fab fa-youtube fa-fw mr-1"
        },
        {
          name: "Centre Work Part 1",
          description: "",
          url: "https://youtu.be/0cTM_vC_Yxk",
          iconclasses: "fab fa-youtube fa-fw mr-1"
        },
        {
          name: "Superhero Hip Hop Class",
          description: "",
          url: "https://youtu.be/Q1uEmlCzThQ",
          iconclasses: "fab fa-youtube fa-fw mr-1"
        }
      ]
    },
    {
      id: 3,
      category: "Mini/Jr/Inter Stretch",
      items: [
        {
          name: "Stretch Part 1",
          description: "",
          url: "https://youtu.be/-KKDsv5teok",
          iconclasses: "fab fa-youtube fa-fw mr-1"
        },
        {
          name: "Stretch Part 2",
          description: "",
          url: "https://youtu.be/IcYiLM7Bv_k",
          iconclasses: "fab fa-youtube fa-fw mr-1"
        },
        {
          name: "Stretch Part 3",
          description: "",
          url: "https://youtu.be/3HVtwTFREeY",
          iconclasses: "fab fa-youtube fa-fw mr-1"
        },
        {
          name: "Stretch Part 4",
          description: "",
          url: "https://youtu.be/qFKHX-pxzB0",
          iconclasses: "fab fa-youtube fa-fw mr-1"
        }
      ]
    },
    {
      id: 4,
      category: "Mini Tap",
      items: [
        {
          name: "Mini/Jr Warm Up Week of April 26",
          description: "",
          url: "https://youtu.be/NQWxkHTTy3c",
          iconclasses: "fab fa-youtube fa-fw mr-1"
        },
        {
          name: "Mini Combo No Music",
          description: "",
          url: "https://youtu.be/L8Ky_P7Bepk",
          iconclasses: "fab fa-youtube fa-fw mr-1"
        },
        {
          name: "Mini Combo W/Music",
          description: "",
          url: "https://youtu.be/QfZ4jypt81w",
          iconclasses: "fab fa-youtube fa-fw mr-1"
        },
        {
          name: "Heel Toe Everyone Exercise",
          description: "",
          url: "https://youtu.be/661jvp59Ay0",
          iconclasses: "fab fa-youtube fa-fw mr-1"
        },
        {
          name: "Time step progressions no music",
          description: "",
          url: "https://youtu.be/eyhkcgzpYxQ",
          iconclasses: "fab fa-youtube fa-fw mr-1"
        },
        {
          name: "Time step progression Music",
          description: "",
          url: "https://youtu.be/HJT-Ou81yI8",
          iconclasses: "fab fa-youtube fa-fw mr-1"
        },
        {
          name: "Pdiddle combo no music",
          description: "",
          url: "https://youtu.be/m9c07Ivs5NM",
          iconclasses: "fab fa-youtube fa-fw mr-1"
        }
      ]
    },
    {
      id: 5,
      category: "Jr Tap",
      items: [
        {
          name: "Mini/Jr Warm Up Week of April 26",
          description: "",
          url: "https://youtu.be/NQWxkHTTy3c",
          iconclasses: "fab fa-youtube fa-fw mr-1"
        },
        {
          name: "Jr Combo Break Down Week of April 26",
          description: "",
          url: "https://youtu.be/CzORwemLR8I",
          iconclasses: "fab fa-youtube fa-fw mr-1"
        },
        {
          name: "Jr Combo W/Music Week of April 26",
          description: "",
          url: "https://youtu.be/7vCo43Wecwk",
          iconclasses: "fab fa-youtube fa-fw mr-1"
        },
        {
          name: "Heel Toe Everyone Exercise",
          description: "",
          url: "https://youtu.be/661jvp59Ay0",
          iconclasses: "fab fa-youtube fa-fw mr-1"
        },
        {
          name: "Pdiddle combo no music",
          description: "",
          url: "https://youtu.be/m9c07Ivs5NM",
          iconclasses: "fab fa-youtube fa-fw mr-1"
        },
        {
          name: "Pdiddle combo Music",
          description: "",
          url: "https://youtu.be/ulgWw787RP8",
          iconclasses: "fab fa-youtube fa-fw mr-1"
        },
        {
          name: "Tech combo no music",
          description: "",
          url: "https://youtu.be/408X1XVJ6T4",
          iconclasses: "fab fa-youtube fa-fw mr-1"
        },
        {
          name: "Tech combo music",
          description: "",
          url: "https://youtu.be/jEh54LarRXI",
          iconclasses: "fab fa-youtube fa-fw mr-1"
        }
      ]
    },
    {
      id: 6,
      category: "Int/Sr Tap",
      items: [
        {
          name: "Int/Sr Warm up Week of April 26",
          description: "",
          url: "https://youtu.be/UFR-LGA96wA",
          iconclasses: "fab fa-youtube fa-fw mr-1"
        },
        {
          name: "Int Combo Break Down Week of April 26",
          description: "",
          url: "https://youtu.be/I_3Y8AsMdCI",
          iconclasses: "fab fa-youtube fa-fw mr-1"
        },
        {
          name: "Int Combo W/Music Week of April 26",
          description: "",
          url: "https://youtu.be/_KvQ_L61g7k",
          iconclasses: "fab fa-youtube fa-fw mr-1"
        },
        {
          name: "Heel Toe Everyone Exercise",
          description: "",
          url: "https://youtu.be/661jvp59Ay0",
          iconclasses: "fab fa-youtube fa-fw mr-1"
        },
        {
          name: "Waltz Clog Drill No Music",
          description: "",
          url: "https://youtu.be/7JrbdrJqWec",
          iconclasses: "fab fa-youtube fa-fw mr-1"
        },
        {
          name: "Waltz Clog Drill W/Music",
          description: "",
          url: "https://youtu.be/o2YrZnPdAK0",
          iconclasses: "fab fa-youtube fa-fw mr-1"
        },
        {
          name: "Sr Wing Combo Break Down Week of April 26",
          description: "",
          url: "https://youtu.be/4sOetoWKY1c",
          iconclasses: "fab fa-youtube fa-fw mr-1"
        },
        {
          name: "Sr Wing Combo Week of April 26",
          description: "",
          url: "https://youtu.be/h2utKcIv4vs",
          iconclasses: "fab fa-youtube fa-fw mr-1"
        }
      ]
    },
    {
      id: 7,
      category: "Hip Hop",
      items: [
        {
          name: "Hip Hop Tutorial Playlist",
          description: "",
          url: "https://www.youtube.com/playlist?list=PLjaGNuM4ZLzK_S_NRX5oVUe4AMY4cG6cg",
          iconclasses: "fab fa-youtube fa-fw mr-1"
        }
      ]
    },
    {
      id: 8,
      category: "Princess Ballet & Jazz",
      items: [
        {
          name: "Princess Ballet Class (Ages 2-3)",
          description: "",
          url: "https://youtu.be/k2PM-uIe1e8",
          iconclasses: "fab fa-youtube fa-fw mr-1"
        },
        {
          name: "Princess Ballet Class (Ages 2-3) - Music Playlist",
          description: "",
          url: "https://www.dropbox.com/sh/1dbjmkrkeq8t89c/AACndVnMkFdP64lyznQUMvssa?dl=0",
          iconclasses: "fas fa-music fa-fw mr-1"
        },
        {
          name: "Princess Ballet Class (Ages 4-6)",
          description: "",
          url: "https://youtu.be/MAz9ss-n6X0",
          iconclasses: "fab fa-youtube fa-fw mr-1"
        },
        {
          name: "Princess Ballet Class (Ages 4-6) - Music Playlist",
          description: "",
          url: "https://www.dropbox.com/sh/j1rlpm4uf2ax9jf/AAD_T1C2S7biRgk9bjbOo54ta?dl=0",
          iconclasses: "fas fa-music fa-fw mr-1"
        },
        {
          name: "Princess Ballet/Jazz (Ages 4-6) - Additional Music for Specific Exercises",
          description:
            '<div>Music for the Young Ballet Class by Rob Thaller</div><div class="small font-weight-light mb-2">Album - 2013 - 49 Songs (music.apple.com)</div><div>Exercise #3 - Track 5: Rises at the Barre</div><div>Exercise #4 - Track 8: Tendu and Retirè</div><div>Exercise #5 - Track 33: Sautès in Parallel Position</div><div>Exercise #6 - Track 33: Sautès in First Position</div><div>Exercise #7 - Track 21: Port De Bras (Arm Movements)</div>',
          url: "https://music.apple.com/ca/album/music-for-the-young-ballet-class/1318531772",
          iconclasses: "fas fa-music fa-fw mr-1"
        }
      ]
    }
  ];

  $scope.textsearch = function(item) {
    var searchstring = $scope.searchtext.toLowerCase();
    if (item.name.toLowerCase().indexOf(searchstring) >= 0 || item.description.toLowerCase().indexOf(searchstring) >= 0) {
      return item;
    }
  };
});

myApp.filter("to_trusted", [
  "$sce",
  function($sce) {
    return function(text) {
      return $sce.trustAsHtml(text);
    };
  }
]);
