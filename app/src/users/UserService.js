(function(){
  'use strict';

  angular.module('users')
         .service('userService', ['$q','$http', UserService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function UserService($q,$http){
    // Promise-based API
    return {
      loadAllUsers : function($http) {
         return $http.get('http://www.andrewbishara.com/dev/api/record/')
           .then(
              function (response) {
                console.log(JSON.stringify(response.data));
                return response.data;
              });
      }
    };
  }

})();
