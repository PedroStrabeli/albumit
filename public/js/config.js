var config = ['$urlRouterProvider', '$stateProvider', '$locationProvider', function($urlRouterProvider, $stateProvider, $locationProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('index', {
              url: "/",
              // params: {
              //   title:
              // },
              templateUrl: "pages/index.html",
              controller: 'index.controller',
              data: { title: '"Instagralbum | Index"'}
          })
        .state('login', {
              url: "/login",
              // params: {
              //   title:"Instagralbum | Login"
              // },
              templateUrl: "pages/login.html",
              controller: 'login.controller',
              data: { pageTitle: '"Instagralbum | Login'}
          })

       }]



app.config(config)