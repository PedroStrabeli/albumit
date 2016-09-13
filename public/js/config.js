var config = function($routeProvider, $authProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'pages/index.html',
      controller: 'indexCtrl'
    })
    .when('/login', {
      templateUrl: 'pages/login.html',
      controller: 'loginCtrl'
    })
    .when('/photo/:id', {
      templateUrl: 'pages/detail.html',
      controller: 'detailCtrl'
    })
    .when('/my-album', {
      templateUrl: 'pages/album.html',
      controller: 'albumCtrl'
    })
    .otherwise('/');


    $authProvider.loginUrl = 'http://localhost:3000/auth/login';
    // $authProvider.signupUrl = 'http://localhost:3000/auth/signup';
    $authProvider.oauth2({
      name: 'instagram',
      url: 'http://localhost:5000/auth/instagram',
      redirectUri: 'http://localhost:5000',
      clientId: 'de0ab1987abb466096f18c0d61e3e5a1',
      requiredUrlParams: ['scope'],
      scope: ['likes'],
      scopeDelimiter: '+',
      authorizationEndpoint: 'https://api.instagram.com/oauth/authorize'
    });
}



app.config(config)