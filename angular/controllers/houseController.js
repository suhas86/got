myApp.controller('houseController',['$http','GotService','$routeParams',function(
	$http,
	GotService,
	$routeParams){

	var main=this;
	this.name=$routeParams.name;
	//Call Service
	GotService.getHouse(main.name).
	then(function successCallback(response){
        main.house=response.data[0];
	},function errorCallback(response){
		alert("some error occurred. Check the console.");
         console.log(response);
	});

}]);//End of Controller