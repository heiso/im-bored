(function() {
  angular
    .module('views')
    .directive('loginGoogleButton', LoginGoogleButton);

  LoginGoogleButton.$inject = ['authService'];
  function LoginGoogleButton(authService) {
    var directive = {
      restrict: 'E',
      templateUrl: 'views/login/loginGoogleButtonDirective.tpl.html',
      scope: {},
      link: link
    };

    function link(scope) {
      scope.user = authService.getUser();
      scope.login = login;
      scope.logout = logout;

      function login() {
        authService
          .logWithGoogle()
          .then(function() {
            // manually call digest cycle
            angular.noop();
          });
      }

      function logout() {
        authService.logout();
      }
    }

    return directive;
  }

})();
