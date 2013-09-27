angular.module('myApp', ['ui.router'])


// visit index.html#/start for basic demo
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('start', {
    url: '/start',
    template: '<h1>Hello {{ name }}</h1>'
  });
})
.controller('DemoController', function($scope) {
  $scope.name = "Ari";
})
// end demo



// visit index.html#/resolve for resolve demo
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('resolve', {
    url: '/resolve',
    template: '<h1>Name: {{ person.name }}</h1><h2>Email: {{ person.email }}</h2>',
    resolve: {
      // returns immediately b/c it's not a promise
      person: function() { return { name: 'ari', email: 'ari@fullstack.io' }; }
    },
    controller: function($scope, person) {
      $scope.person = person;
    }
  });
})
// end demo

// visit index.html#/inbox/1 $stateParams demo
// also try index.html#/inbox/most-awesome-inbox-ever
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('inbox', {
    url: '/inbox/:inboxId',
    template: '<h1>Welcome to your inbox, with InboxId: {{ inboxId }}</h1>',
    controller: function($scope, $stateParams) {
      $scope.inboxId = $stateParams.inboxId;
    }
  });
});
// end demo
