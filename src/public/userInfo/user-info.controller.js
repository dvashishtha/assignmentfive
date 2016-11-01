(function () {
'use strict';

angular.module('public').controller('UserInfoController', UserInfoController);

UserInfoController.$inject = ['SignupService', 'ApiPath'];
function UserInfoController(SignupService, ApiPath) {
  var infoCtrl = this;

  infoCtrl.loggedIn = false;
  infoCtrl.user = SignupService.master;
  if(SignupService.completed) {
    infoCtrl.loggedIn = true;
  }
  infoCtrl.basePath = ApiPath;
}


})();
