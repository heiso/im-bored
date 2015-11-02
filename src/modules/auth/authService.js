(function() {

  angular
    .module('modules.auth')
    .service('authService', AuthService);

  AuthService.$inject = ['$q', 'User'];
  function AuthService($q, User) {

    var _ref = new Firebase('https://brilliant-torch-5912.firebaseio.com');
    var _user = new User();

    this.getUser = getUser;
    this.logWithGoogle = logWithGoogle;
    this.logout = logout;

    _ref.onAuth(function(authData) {
      _user.update(authData);
    });

    function getUser() {
      return _user;
    }

    function logWithGoogle() {
      var deferred = $q.defer();
      _ref.authWithOAuthPopup('google', function(error, authData) {
        if (error) {
          deferred.reject(error);
        }
        deferred.resolve(authData);
      });
      return deferred.promise;
    }

    function logout() {
      _ref.unauth();
    }

  }

})();
