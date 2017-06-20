myApp.controller('charController',['$http','GotService','$routeParams',function(
	$http,
	GotService,
	$routeParams){

	var main=this;
	this.id=$routeParams.id;
	//Call Service
	GotService.getChar(main.id).
	then(function successCallback(response){
        main.char=response.data;
	},function errorCallback(response){
		alert("some error occurred. Check the console.");
         console.log(response);
	});

}]);//End of Controller