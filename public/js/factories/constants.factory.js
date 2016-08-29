var InstagramFactory = function ($rootScope, $location, $http) {
	var constants = {}
	var self = this;
	constants.redirect_uri = 'http://localhost:5000'
	constants.token=null;
	constants.client_id = 'de0ab1987abb466096f18c0d61e3e5a1'

	constants.fetchPopular = function(callback){
        var endpoint = "https://api.instagram.com/v1/media/popular";
        endpoint += "?count=99";
        endpoint += "&client_id=" + constants.client_id;
        endpoint += "&callback=JSON_CALLBACK";
        $http.jsonp(endpoint).success(function(response){
        	console.log(response)
          callback(response.data);
        });
      }

    constants.login= function () {
    	//console.log('cheguei')
    		var url = 'https://www.instagram.com/oauth/authorize/?client_id='+constants.client_id+'&amp;redirect_uri='+constants.redirect_uri+'&amp;response_type=code';
    		// "https://instagram.com/oauth/authorize/?client_id=" + constants.client_id +
      //           "&redirect_uri=" + $location.absUrl().split('#')[0] +
      //           "&response_type=token"

            window.open(url, "_self");
        }

    constants.getHashtag = function(hashtag){
    	window.open('https://api.instagram.com/v1/tags/'+hashtag+'/media/recent?access_token='+constants.token)
    }
	return constants
}

app.factory('InstagramFactory', InstagramFactory)