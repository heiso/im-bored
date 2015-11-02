(function() {

  angular
    .module('modules.auth')
    .factory('User', UserFactory);

  UserFactory.$inject = [];
  function UserFactory() {

    function User() {
      this.authData = null;
      this.isLogged = false;
    }

    User.prototype.update = function update(authData) {
      this.authData = authData;
      this.isLogged = !_.isNull(authData);
    };

    return User;

  }

})();
