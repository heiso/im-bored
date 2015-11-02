(function() {

  angular
    .module('app.home')
    .controller('homeIndexCtrl', HomeIndexCtrl);

  function HomeIndexCtrl() {
    var vm = this;

    vm.triggerAvailable = triggerAvailable;
    vm.currentUser = {
      'name': 'toto',
      'id': 1,
      'available': false
    };
    vm.users = [
      {
        'name': 'toto',
        'id': 1,
        'available': false
      }
    ];

    function triggerAvailable() {
      // call server
      vm.currentUser.available = !vm.currentUser.available;
      angular.noop();
    }

  }

})();
