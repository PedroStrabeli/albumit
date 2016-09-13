var index = function($scope, $http, $window, $rootScope, $auth){
	$scope.search={};
	$scope.isAuthenticated = function() {
	  return $auth.isAuthenticated();
	};
	$scope.list = [];

	$scope.linkInstagram = function() {
	  $auth.link('instagram')
	    .then(function(response) {
	      $window.localStorage.currentUser = JSON.stringify(response.data.user);
	      $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
	    });
	};

	//função de busca mock, simulando o API
	$scope.onSubmit = function(){
		$scope.list=[];
		for (i=0;i<response.data.length;i++){
			for(j=0;j<response.data[i].tags.length;j++){
				if (response.data[i].tags[j]==$scope.search.hashtag){
					$scope.list.push(response.data[i]);
					break;
				}
			}
		} 
	}

	//chamando a rota de salvar no mongo
	$scope.savePhoto = function(item){
		var miniItem={
			type:item.type,
			tags:item.tags,
			caption:item.caption,
			user:item.user,
			images:item.images
		}
		//Adicionaria o id do usuario e tudo mais que precisasse, ao objeto.
		$http.post('/albumit/save', miniItem)
			.then(function(response){
				console.log("Sucesso")
				alert("Foto Adicionada ao Album")
			})
			.catch(function(err){console.log("Falha")})
	}
}


var response={
    "data": [{
        "type": "image",
        "users_in_photo": [],
        "filter": "Gotham",
        "tags": ["beach","vacation"],
        "comments": { },
        "caption": {
            "created_time": "1296656006",
            "text": "Ah, so good to be here",
            "from": {
                "username": "cocomiin",
                "full_name": "",
                "type": "user",
                "id": "1127272"
            },
            "id": "26329105"
        },
        "likes": {
            "count": 35,
            "data": [{
                "username": "mikeyk",
                "full_name": "Kevin S",
                "id": "4",
                "profile_picture": "..."
            }, {}]
        },
        "link": "http://instagr.am/p/BV5v_/",
        "user": {
            "username": "cocomiin",
            "full_name": "Cocomiin",
            "profile_picture": "http://distillery.s3.amazonaws.com/profiles/profile_1127272_75sq_1296145633.jpg",
            "id": "1127272"
        },
        "created_time": "1296655883",
        "images": {
            "low_resolution": {
                "url": "http://distillery.s3.amazonaws.com/media/2011/02/01/34d027f155204a1f98dde38649a752ad_6.jpg",
                "width": 306,
                "height": 306
            },
            "thumbnail": {
                "url": "http://www.planavacation.ca/images/beach-vacation.jpg",
                "width": 150,
                "height": 150
            },
            "standard_resolution": {
                "url": "http://distillery.s3.amazonaws.com/media/2011/02/01/34d027f155204a1f98dde38649a752ad_7.jpg",
                "width": 612,
                "height": 612
            }
        },
        "id": "22518783",
        "location": null
    },{
        "type": "image",
        "users_in_photo": [],
        "filter": "Gotham",
        "tags": ["beach", "ocean"],
        "comments": {},
        "caption": {
            "created_time": "1296656006",
            "text": "Well, i love it here",
            "from": {
                "username": "cocomiin",
                "full_name": "",
                "type": "user",
                "id": "1127272"
            },
            "id": "26329105"
        },
        "likes": {
            "count": 35,
            "data": [{
                "username": "mikeyk",
                "full_name": "Kevin S",
                "id": "4",
                "profile_picture": "..."
            }, {}]
        },
        "link": "http://instagr.am/p/BV5v_/",
        "user": {
            "username": "cocomiin",
            "full_name": "Cocomiin",
            "profile_picture": "http://distillery.s3.amazonaws.com/profiles/profile_1127272_75sq_1296145633.jpg",
            "id": "1127272"
        },
        "created_time": "1296655883",
        "images": {
            "low_resolution": {
                "url": "http://distillery.s3.amazonaws.com/media/2011/02/01/34d027f155204a1f98dde38649a752ad_6.jpg",
                "width": 306,
                "height": 306
            },
            "thumbnail": {
                "url": "http://onecentatatime.com/wp-content/uploads/2013/09/Beach-Vacation.jpg",
                "width": 150,
                "height": 150
            },
            "standard_resolution": {
                "url": "http://distillery.s3.amazonaws.com/media/2011/02/01/34d027f155204a1f98dde38649a752ad_7.jpg",
                "width": 612,
                "height": 612
            }
        },
        "id": "22518783",
        "location": null
    },{
        "type": "image",
        "users_in_photo": [],
        "filter": "Gotham",
        "tags": ["night", "drinks"],
        "comments": {},
        "caption": {
            "created_time": "1296656006",
            "text": "Let's get drunk!",
            "from": {
                "username": "cocomiin",
                "full_name": "",
                "type": "user",
                "id": "1127272"
            },
            "id": "26329105"
        },
        "likes": {
            "count": 35,
            "data": [{
                "username": "mikeyk",
                "full_name": "Kevin S",
                "id": "4",
                "profile_picture": "..."
            }, {}]
        },
        "link": "http://instagr.am/p/BV5v_/",
        "user": {
            "username": "cocomiin",
            "full_name": "Cocomiin",
            "profile_picture": "http://distillery.s3.amazonaws.com/profiles/profile_1127272_75sq_1296145633.jpg",
            "id": "1127272"
        },
        "created_time": "1296655883",
        "images": {
            "low_resolution": {
                "url": "http://distillery.s3.amazonaws.com/media/2011/02/01/34d027f155204a1f98dde38649a752ad_6.jpg",
                "width": 306,
                "height": 306
            },
            "thumbnail": {
                "url": "http://www.personalchoicejamaica.com/ProductImages/Hotel/36893/P-MalataiJP-NightDrinks.jpg",
                "width": 150,
                "height": 150
            },
            "standard_resolution": {
                "url": "http://distillery.s3.amazonaws.com/media/2011/02/01/34d027f155204a1f98dde38649a752ad_7.jpg",
                "width": 612,
                "height": 612
            }
        },
        "id": "22518783",
        "location": null
    },{
        "type": "image",
        "users_in_photo": [],
        "filter": "Gotham",
        "tags": ["drinks"],
        "comments": {},
        "caption": {
            "created_time": "1296656006",
            "text": "Cheers",
            "from": {
                "username": "cocomiin",
                "full_name": "",
                "type": "user",
                "id": "1127272"
            },
            "id": "26329105"
        },
        "likes": {
            "count": 35,
            "data": [{
                "username": "mikeyk",
                "full_name": "Kevin S",
                "id": "4",
                "profile_picture": "..."
            }, {}]
        },
        "link": "http://instagr.am/p/BV5v_/",
        "user": {
            "username": "cocomiin",
            "full_name": "Cocomiin",
            "profile_picture": "http://distillery.s3.amazonaws.com/profiles/profile_1127272_75sq_1296145633.jpg",
            "id": "1127272"
        },
        "created_time": "1296655883",
        "images": {
            "low_resolution": {
                "url": "http://distillery.s3.amazonaws.com/media/2011/02/01/34d027f155204a1f98dde38649a752ad_6.jpg",
                "width": 306,
                "height": 306
            },
            "thumbnail": {
                "url": "http://www.aslembrancinhasdecasamento.com/wp-content/uploads/2014/12/receita-de-drinks.jpg",
                "width": 150,
                "height": 150
            },
            "standard_resolution": {
                "url": "http://distillery.s3.amazonaws.com/media/2011/02/01/34d027f155204a1f98dde38649a752ad_7.jpg",
                "width": 612,
                "height": 612
            }
        },
        "id": "22518783",
        "location": null
    },{
        "type": "image",
        "users_in_photo": [],
        "filter": "Gotham",
        "tags": ["beach", "drinks"],
        "comments": {},
        "caption": {
            "created_time": "1296656006",
            "text": "Nice and relaxing",
            "from": {
                "username": "cocomiin",
                "full_name": "",
                "type": "user",
                "id": "1127272"
            },
            "id": "26329105"
        },
        "likes": {
            "count": 35,
            "data": [{
                "username": "mikeyk",
                "full_name": "Kevin S",
                "id": "4",
                "profile_picture": "..."
            }, {}]
        },
        "link": "http://instagr.am/p/BV5v_/",
        "user": {
            "username": "cocomiin",
            "full_name": "Cocomiin",
            "profile_picture": "http://distillery.s3.amazonaws.com/profiles/profile_1127272_75sq_1296145633.jpg",
            "id": "1127272"
        },
        "created_time": "1296655883",
        "images": {
            "low_resolution": {
                "url": "http://distillery.s3.amazonaws.com/media/2011/02/01/34d027f155204a1f98dde38649a752ad_6.jpg",
                "width": 306,
                "height": 306
            },
            "thumbnail": {
                "url": "http://s9.favim.com/orig/140605/beach-blue-colours-drinks-Favim.com-1816669.jpg",
                "width": 150,
                "height": 150
            },
            "standard_resolution": {
                "url": "http://distillery.s3.amazonaws.com/media/2011/02/01/34d027f155204a1f98dde38649a752ad_7.jpg",
                "width": 612,
                "height": 612
            }
        },
        "id": "22518783",
        "location": null
    },{
        "type": "image",
        "users_in_photo": [],
        "filter": "Gotham",
        "tags": ["batman", "vacation"],
        "comments": {},
        "caption": {
            "created_time": "1296656006",
            "text": "Time for a break",
            "from": {
                "username": "cocomiin",
                "full_name": "",
                "type": "user",
                "id": "1127272"
            },
            "id": "26329105"
        },
        "likes": {
            "count": 35,
            "data": [{
                "username": "mikeyk",
                "full_name": "Kevin S",
                "id": "4",
                "profile_picture": "..."
            }, {}]
        },
        "link": "http://instagr.am/p/BV5v_/",
        "user": {
            "username": "cocomiin",
            "full_name": "Cocomiin",
            "profile_picture": "http://distillery.s3.amazonaws.com/profiles/profile_1127272_75sq_1296145633.jpg",
            "id": "1127272"
        },
        "created_time": "1296655883",
        "images": {
            "low_resolution": {
                "url": "http://distillery.s3.amazonaws.com/media/2011/02/01/34d027f155204a1f98dde38649a752ad_6.jpg",
                "width": 306,
                "height": 306
            },
            "thumbnail": {
                "url": "http://randomoverload.org/wp-content/uploads/2013/03/8bb2funny-Batman-vacations-chairs-relax.jpg",
                "width": 150,
                "height": 150
            },
            "standard_resolution": {
                "url": "http://distillery.s3.amazonaws.com/media/2011/02/01/34d027f155204a1f98dde38649a752ad_7.jpg",
                "width": 612,
                "height": 612
            }
        },
        "id": "22518783",
        "location": null
    }]}

app.controller('indexCtrl',index)