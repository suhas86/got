myApp.controller('bookController',['$http','GotService','$routeParams',function(
	$$http,
	GotService,
	$routeParams){

	var main=this;
	this.name=$routeParams.name;
	//Call Service
	GotService.getBook(main.name).
	then(function successCallback(response){
        main.book=response.data[0];
	},function errorCallback(response){
		alert("some error occurred. Check the console.");
         console.log(response);
	});

}]);//End of Controller