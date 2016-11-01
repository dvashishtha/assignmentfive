(function() {
'use strict';

angular.module('public').service('SignupService', SignupService);

SignupService.$inject = ['$http', 'ApiPath', '$q'];
function SignupService($http, ApiPath, $q) {
  var service = this;

  service.master = {};

  service.signup = function(user) {

    var request = $http.get(ApiPath + '/menu_items/' + user.favDish + '.json');
    request.then(function(response) {
      service.master = angular.copy(user);
      service.completed = true;
      service.favDishValid = true;
      service.master.favDishName = response.data.name;
      service.master.favDishDecription = response.data.description; 
      console.log(response.data);
	}, function (data) {
      service.completed = false;
      service.favDishValid = false;
     
    });
    return request;
  };
}

})();
